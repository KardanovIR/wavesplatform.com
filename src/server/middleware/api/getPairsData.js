import Client from '@waves/data-service-client-js';
import fetch from 'node-fetch';
import { withTimer } from 'src/server/middleware/withTimer';
import { assoc, zipWith } from 'ramda';

const clientDS = new Client({
  rootUrl: 'https://api.wavesplatform.com/v0',
  fetch: (...args) => fetch(...args).then(res => res.text()),
});

const Assets = {
  WAVES: 'WAVES',
  BTC: '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS',
  BCH: 'zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy',
  ETH: '474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu',
  DASH: 'B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H',
  LTC: 'HZk1mbfuJpmxU1Fs4AX5MWLVYtctsNcg6e2C6VKqK8zk',
  XMR: '5WvPKSJXzVE2orvbkJ8wsQmmQKqTv9sGBPksV4adViw3',
  USD: 'Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck',
};

const pairs = [
  'WAVES/USD',
  'WAVES/BTC',
  'BCH/WAVES',
  'ETH/BTC',
  'DASH/BTC',
  'ETH/WAVES',
  'LTC/WAVES',
  'DASH/WAVES',
  'XMR/WAVES',
];

const getPrice = pair => (pair.lastPrice + pair.firstPrice) / 2;
const addVolumeInUSD = ([usdWavesPair, ...pairs]) =>
  pairs.map(p => ({ ...p, volumeUSD: p.volumeWaves * getPrice(usdWavesPair) }));
const getPairsData = async (ctx, next) => {
  await clientDS
    .getPairs(
      pairs.map(p =>
        p
          .split('/')
          .map(x => Assets[x])
          .join('/')
      )
    )
    .then(
      ps =>
        (ctx.state.initialState = {
          ...ctx.state.initialState,
          pairs: zipWith(
            assoc('pair'),
            pairs.slice(1),
            addVolumeInUSD(ps.data.filter(x => x !== null))
          ),
        })
    )
    .catch(() => {
      throw new Error('Unable to fetch pairs data from data service');
    });
  await next();
};

export default withTimer({
  target: 'pairs_data',
  middleware: getPairsData,
});
