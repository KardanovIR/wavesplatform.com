import React from 'react';

import { render } from '../render';


import Main from '../../common/containers/Main';


render(<Main />);



if (process.env.NODE_ENV === 'development') {
    if (module.hot) module.hot.accept('../../common/containers/Main', () => render(<Main />))
}