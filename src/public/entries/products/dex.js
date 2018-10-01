import React from 'react';

import { render } from 'src/public/render';

import Dex from 'src/common/containers/Products/Dex';

render(<Dex />);

if (module.hot) {
  module.hot.accept('src/common/containers/Products/Dex', () =>
    render(<Dex />)
  );
}
