import React from 'react';

import { render, getInitialState } from 'src/public/render';

import Dex from 'src/common/containers/Products/Dex';

render(<Dex initialState={getInitialState()} />);

if (module.hot) {
  module.hot.accept('src/common/containers/Products/Dex', () =>
    render(<Dex initialState={getInitialState()} />)
  );
}
