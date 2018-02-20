import React from 'react';

import { render, getInitialState } from 'src/public/render';

import Wallet from 'src/common/containers/Products/Wallet';

render(<Wallet initialState={getInitialState()} />);
