import serve from 'koa-static';
import mount from 'koa-mount';

import compose from 'koa-compose';


import isProd from 'src/common/utils/isProd';


const MAX_AGE = isProd() ? 2592000000 : 0;


// cache static for 30 days
export default compose([
    mount('/static', serve('./dist', { maxage: MAX_AGE })),
    serve('./assets', { maxage: MAX_AGE }),
])