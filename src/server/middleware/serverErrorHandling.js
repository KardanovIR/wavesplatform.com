export default async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        // log error
        ctx.logger.error(err.message || 'Unknown error');

        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
}