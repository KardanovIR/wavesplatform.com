import compose from 'koa-compose';
import { render } from 'src/server/middleware/render';

import SmartContracts from 'src/common/containers/SmartContracts';

export default compose([
  render({
    script: 'smartContracts',
    component: SmartContracts,
    description: 'Failsafe operation for business logic',
  }),
]);
