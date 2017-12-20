import React from 'react';

import { render } from '../render';

import Leasing from 'src/common/containers/Leasing';
import reducer from 'src/common/containers/Leasing/reducer';

render(<Leasing />, {
  reducer,
});
