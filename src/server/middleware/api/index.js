import { withTimer } from 'src/server/middleware/withTimer';

const emptyNext = () => Promise.resolve();

export default apiRequests =>
  withTimer('all_requests', async (ctx, next) => {
    const requestPromises = apiRequests.map(r => r(ctx, emptyNext));
    await Promise.all(requestPromises);
    await next();
  });

export { default as getDexData } from './getDexData';
export { default as getDexTopPairs } from './getDexTopPairs';
export { default as getMrtWavesPrice } from './getMrtWavesPrice';
export { default as getWavesTopNodes } from './getWavesTopNodes';
