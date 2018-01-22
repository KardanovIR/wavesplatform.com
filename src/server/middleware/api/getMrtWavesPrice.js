import fetchJson from 'src/server/utils/fetchJson';
import { compose, map, reduce, prop } from 'ramda';
import { withTimer } from 'src/server/middleware/withTimer';

const getAveragePrice = compose(
  reduce((a, b) => (a + b) / 2, 0),
  map(compose(parseFloat, prop('price')))
);

const getMrtWavesPrice = async (ctx, next) => {
  await fetchJson('http://marketdata.wavesplatform.com/api/trades/MRT/WAVES/6')
    .then(getAveragePrice)
    .then(
      res =>
        (ctx.state.initialState = {
          ...ctx.state.initialState,
          mrtWavesPrice: res,
        })
    )
    .catch(() => {
      throw new Error('Unable to get MRT/WAVES trades');
    });
  await next();
};

export default withTimer({
  target: 'mrt_waves_price',
  middleware: getMrtWavesPrice,
});
