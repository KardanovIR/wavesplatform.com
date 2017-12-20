import React from 'react';

import { render } from '../render';

import Error404 from '../../common/containers/Error404';

render(<Error404 />);

if (process.env.NODE_ENV === 'development') {
  if (module.hot)
    module.hot.accept('../../common/containers/Error404', () =>
      render(<Error404 />)
    );
}
