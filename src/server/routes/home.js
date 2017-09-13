import compose from 'koa-compose';

import { getDexData } from '../middleware/getDexData';
import { render } from '../middleware/render';


import Main from 'src/common/containers/Main';
// import messages from 'src/server/locale';



export default compose([
    getDexData,
    render({
        script: 'main',
        component: Main,
        description: 'Get started with blockchain',
        // messages
    }),
])