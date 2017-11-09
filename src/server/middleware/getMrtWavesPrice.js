import fetchJson from 'src/server/utils/fetchJson';
import { compose, map, reduce, prop } from 'ramda';

const getAveragePrice = compose(
    reduce((a, b) => (a + b) / 2, 0),
    map(compose(parseFloat, prop('price')))
);

export default async (ctx, next) => {
    const start = Date.now();

    await fetchJson(
        'http://marketdata.wavesplatform.com/api/trades/MRT/WAVES/6'
    )
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

    const ms = Date.now() - start;
    ctx.logger.info('API_request', {
        target: 'mrt_waves_price',
        duration: `${ms}ms`,
    });
    ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;

    await next();
};
