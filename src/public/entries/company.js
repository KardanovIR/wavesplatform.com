import React from 'react';

import { render } from '../render';


import Company from '../../common/containers/Company';


render(<Company />);



if (process.env.NODE_ENV === 'development') {
    if (module.hot) module.hot.accept('../../common/containers/Main', () => render(<Main />))
}