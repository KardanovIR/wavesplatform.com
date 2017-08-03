import React from 'react';

import { render } from '../render';


import Developers from '../../common/containers/Developers';


render(<Developers />);



if (process.env.NODE_ENV === 'development') {
    if (module.hot) module.hot.accept('../../common/containers/Developers', () => render(<Developers />))
}