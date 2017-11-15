import { render } from 'src/server/middleware/render';

import Company from 'src/common/containers/Company';
import reducer from 'src/common/containers/Company/reducer';

export default render({
  script: 'company',
  component: Company,
  reducer,
  description: 'We change people’s lives',
});
