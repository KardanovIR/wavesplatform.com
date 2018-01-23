const emptyNext = () => Promise.resolve();

export const withTimer = ({
  target,
  middleware,
  addAccessLog = false,
}) => async (ctx, next) => {
  const start = Date.now();
  await middleware(ctx, emptyNext);
  const ms = Date.now() - start;
  ctx.logger.info('API_request', {
    target,
    duration: `${ms}ms`,
  });

  if (addAccessLog) {
    ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;
  }

  await next();
};
