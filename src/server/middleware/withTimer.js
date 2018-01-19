import { curryN } from 'ramda';
export const withTimer = curryN(
  2,
  (target, middleware) => async (ctx, next) => {
    const start = Date.now();
    await middleware(ctx, next);
    const ms = Date.now() - start;
    ctx.logger.info('API_request', {
      target,
      duration: `${ms}ms`,
    });
    ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;
  }
);
