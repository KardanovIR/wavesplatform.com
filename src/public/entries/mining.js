import React from 'react';

import { render } from '../render';

import Mining from 'src/common/containers/Mining';
import reducer from 'src/common/containers/Mining/reducer';

render(<Mining />, {
    reducer,
});
