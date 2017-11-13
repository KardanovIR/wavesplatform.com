import React from 'react';

import { render, getInitialState } from '../render';

import Product from '../../common/containers/Product';

render(<Product initialState={getInitialState()} />);
