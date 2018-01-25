export default (ctx, next) =>
  next().then(() => ctx.set('Cache-control', 'no-cache'));
