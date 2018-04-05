import React from 'react';

import { render, getInitialState } from 'src/public/render';

import SmartContracts from 'src/common/containers/SmartContracts';

render(<SmartContracts initialState={getInitialState()} />);
