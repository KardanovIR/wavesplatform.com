export default async (ctx, next) => {
    const start = Date.now();
    ctx.accessLog = {};

    await next();

    const ms = Date.now() - start;
    ctx.logger.info(`${ctx.method} ${ctx.url} ${ms}ms`, ctx.accessLog || {});
};