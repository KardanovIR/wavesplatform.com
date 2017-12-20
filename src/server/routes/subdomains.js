import Router from 'koa-router';

import { render } from 'src/server/middleware/render';

// page components
import WavesNG from 'src/common/containers/WavesNG';
import WavesNGReducer from 'src/common/containers/WavesNG/reducer';

const subdomains = new Router();

subdomains.get(
  '/waves-ng',
  render({
    script: 'wavesNG',
    component: WavesNG,
    description: 'Help us test Waves-NG',
    reducer: WavesNGReducer,
  })
);

export default subdomains;
