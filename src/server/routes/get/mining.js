import compose from 'koa-compose';

import runApiRequests, { getMrtWavesPrice } from 'src/server/middleware/api';

import { render } from 'src/server/middleware/render';

import Mining from 'src/common/containers/Mining';
import reducer from 'src/common/containers/Mining/reducer';

export default compose([
  runApiRequests([getMrtWavesPrice]),
  render({
    script: 'mining',
    component: Mining,
    reducer,
    description: 'Join the Waves Network',
  }),
]);
