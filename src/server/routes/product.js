import compose from 'koa-compose';

import { getDexTopPairs } from '../middleware/getDexTopPairs';
import { render } from '../middleware/render';

// import Main from '../../common/containers/Product';


export default compose([
    getDexTopPairs,
    render('product'),
])