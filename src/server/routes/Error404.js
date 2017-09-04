import compose from 'koa-compose';

import { render } from '../middleware/render';

import Error404 from 'src/common/containers/Error404';


export default compose([
    async (ctx, next) => {
        ctx.status = 404;
        await next();
    },
    render({ script: 'error404', component: Error404 }),
])