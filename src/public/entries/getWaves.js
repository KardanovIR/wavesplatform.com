import React from 'react';

import { render } from '../render';

import GetWaves from 'src/common/containers/GetWaves';

render(<GetWaves />);

if (process.env.NODE_ENV === 'development') {
  if (module.hot)
    module.hot.accept('src/common/containers/GetWaves', () =>
      render(<GetWaves />)
    );
}
