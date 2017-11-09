import compose from 'koa-compose';

import getWavesTopNodes from 'src/server/middleware/getWavesTopNodes';
import getMrtWavesPrice from 'src/server/middleware/getMrtWavesPrice';
import { render } from 'src/server/middleware/render';

import Mining from 'src/common/containers/Mining';
import reducer from 'src/common/containers/Mining/reducer';

export default compose([
    getWavesTopNodes,
    getMrtWavesPrice,
    render({
        script: 'mining',
        component: Mining,
        reducer,
        description: 'Support the Waves Network',
    }),
]);
