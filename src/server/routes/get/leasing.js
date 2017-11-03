import compose from 'koa-compose';

import { getWavesTopNodes } from 'src/server/middleware/getWavesTopNodes';
import { render } from 'src/server/middleware/render';


import Mining from 'src/common/containers/Mining';


export default compose([
    getWavesTopNodes,
    render({
        script: 'mining',
        component: Mining,
        description: 'Support the Waves Network'
    }),
])