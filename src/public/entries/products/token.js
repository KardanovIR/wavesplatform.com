import React from 'react';

import { render, getInitialState } from 'src/public/render';

import Token from 'src/common/containers/Products/Token';

render(<Token initialState={getInitialState()} />);
