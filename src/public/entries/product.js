import React from 'react';

import { render, getInitialState } from '../render';


import Product from '../../common/containers/Product';


render(<Product initialState={getInitialState()} />);



if (process.env.NODE_ENV === 'development') {
    if (module.hot) module.hot.accept('../../common/containers/Product', () => render(<Product />))
}