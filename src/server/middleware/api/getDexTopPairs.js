import fetchJson from 'src/server/utils/fetchJson';
import checkEnvVariable from 'src/server/utils/checkEnvVariable';
import { withTimer } from 'src/server/middleware/withTimer';

checkEnvVariable('INFO_API');

const getDexTopPairs = async (ctx, next) => {
  await fetchJson(`${process.env.INFO_API}/pairs`)
    .then(
      res =>
        (ctx.state.initialState = {
          ...ctx.state.initialState,
          dexTopPairs: res,
        })
    )
    .catch(() => ctx.throw(500, 'Unable to get DEX top pairs'));
  await next();
};

export default withTimer({
  target: 'dex_top_pairs',
  middleware: getDexTopPairs,
});
