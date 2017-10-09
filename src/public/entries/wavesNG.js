import React from 'react';

import { render } from '../render';


import WavesNG from 'src/common/containers/WavesNG';
import reducer from 'src/common/containers/WavesNG/reducer';


render(<WavesNG />, {
    reducer
});