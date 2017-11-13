import fetchJson from 'src/server/utils/fetchJson';
import checkEnvVariable from 'src/server/utils/checkEnvVariable';

checkEnvVariable('INFO_API');

export default async (ctx, next) => {
    const start = Date.now();

    await fetchJson(`${process.env.INFO_API}/top-nodes`)
        .then(res => ctx.state.initialState = { ...ctx.state.initialState, wavesTopNodes: res } )
        .catch(err => ctx.throw(500, 'Unable to get Waves top nodes'));

    const ms = Date.now() - start;
    ctx.logger.info('API_request', { target: 'waves_top_nodes', duration: `${ms}ms`  });
    ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;
    
    await next();
}