export default apiRequests => async (ctx, next) => {
  const start = Date.now();

  const requestPromises = apiRequests.map(r => r(ctx));
  await Promise.all(requestPromises);

  const ms = Date.now() - start;
  ctx.logger.info('API_request', {
    target: 'all_requests',
    duration: `${ms}ms`,
  });
  ctx.accessLog.APIResponseTime = (ctx.accessLog.APIResponseTime || 0) + ms;

  await next();
};
