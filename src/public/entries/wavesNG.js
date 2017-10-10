import React from 'react';

import { render } from '../render';


import WavesNG from 'src/common/containers/WavesNG';
import reducer from 'src/common/containers/WavesNG/reducer';
import epic from 'src/common/containers/WavesNG/epic';


render(<WavesNG />, {
	reducer,
	epic
});