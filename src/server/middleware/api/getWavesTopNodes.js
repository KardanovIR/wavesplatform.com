import fetchJson from 'src/server/utils/fetchJson';
import checkEnvVariable from 'src/server/utils/checkEnvVariable';
import { withTimer } from 'src/server/middleware/withTimer';

checkEnvVariable('INFO_API');

const getWavesTopNodes = async (ctx, next) => {
  await fetchJson(`${process.env.INFO_API}/top-nodes`)
    .then(
      res =>
        (ctx.state.initialState = {
          ...ctx.state.initialState,
          wavesTopNodes: res,
        })
    )
    .catch(() => ctx.throw(500, 'Unable to get Waves top nodes'));

  await next();
};
export default withTimer('waves_top_nodes', getWavesTopNodes);
