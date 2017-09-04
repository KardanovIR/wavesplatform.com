import fetchJson from 'src/server/utils/fetchJson';

const getDexData = async (ctx, next) => {
    const start = Date.now();

    await fetchJson('http://13.56.20.226/general')
        .then(res => ctx.state.initialState = { ...ctx.state.initialState, dexData: res } )
        .catch(err => ctx.throw(500, 'Unable to fetch DEX general data'));

    const ms = Date.now() - start;
    ctx.logger.info('API_request', { target: 'dex_data', duration: `${ms}ms`  });
    ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;

    await next();
}

export { getDexData };