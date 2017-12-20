import Router from 'koa-router';

// api middleware
import feedback from './post/feedback';
import subscribe from './post/subscribe';

const api = new Router();

api.post('/subscription', subscribe).post('/feedback', feedback());

export default api;
