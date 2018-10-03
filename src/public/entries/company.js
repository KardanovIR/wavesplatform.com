import React from 'react';

import { render } from '../render';

import Company from 'src/common/containers/Company';

import reducer from 'src/common/containers/Company/reducer';

render(<Company />, { reducer });
