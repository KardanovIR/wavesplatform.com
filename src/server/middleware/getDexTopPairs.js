import fetchJson from 'src/server/utils/fetchJson';

const getDexTopPairs = async (ctx, next) => {
    const start = Date.now();

    await fetchJson('http://13.56.20.226/pairs')
        .then(res => ctx.state.initialState = { ...ctx.state.initialState, dexTopPairs: res } )
        .catch(err => ctx.throw(500, 'Unable to get DEX top pairs'));

    const ms = Date.now() - start;
    ctx.logger.info('API_request', { target: 'dex_top_pairs', duration: `${ms}ms`  });
    ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;
    
    await next();
}

export { getDexTopPairs };