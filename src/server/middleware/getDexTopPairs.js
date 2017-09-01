import fetchJson from 'src/server/utils/fetchJson';

const getDexTopPairs = async (ctx, next) => {
    await fetchJson('http://0.0.0.0:3000/pairs')
        .then(res => ctx.state.initialState = { ...ctx.state.initialState, dexTopPairs: res } )
        .catch(err => ctx.throw(500, 'Unable to get DEX top pairs'));

    await next();
}

export { getDexTopPairs };