import React from 'react';

import { run } from '../run';


import Main from '../../common/containers/Main';


run(<Main />);



if (process.env.NODE_ENV === 'development') {
    if (module.hot) module.hot.accept('../../common/containers/Main', () => run(<Main />))
}