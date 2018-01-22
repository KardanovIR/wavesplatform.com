import fetchJson from 'src/server/utils/fetchJson';
import checkEnvVariable from 'src/server/utils/checkEnvVariable';
import { withTimer } from 'src/server/middleware/withTimer';

checkEnvVariable('INFO_API');

const getDexData = async (ctx, next) => {
  await fetchJson(`${process.env.INFO_API}/general`)
    .then(
      res =>
        (ctx.state.initialState = { ...ctx.state.initialState, dexData: res })
    )
    .catch(() => ctx.throw(500, 'Unable to fetch DEX general data'));
  await next();
};

export default withTimer({ target: 'dex_data', middleware: getDexData });
