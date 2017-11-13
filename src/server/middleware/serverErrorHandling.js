export default async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        // log error
        ctx.logger.error(err.message || 'Unknown error');

        ctx.status = err.status || 500;

        if (process.env.NODE_ENV !== 'production') {
            ctx.body = err.message;
        }

        // console.log(err);
        
        ctx.app.emit('error', err, ctx);
    }
}