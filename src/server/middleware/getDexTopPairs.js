import fetchJson from 'src/server/utils/fetchJson';

const getDexTopPairs = async (ctx, next) => {
    // await fetchJson('http://13.56.20.226/pairs')
    //     .then(res => ctx.state.initialState = { ...ctx.state.initialState, dexTopPairs: res } );
    next();
}

export { getDexTopPairs };