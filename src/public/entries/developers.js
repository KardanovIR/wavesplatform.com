import React from 'react';

import { run } from '../run';


import Developers from '../../common/containers/Developers';


run(<Developers />);



if (process.env.NODE_ENV === 'development') {
    if (module.hot) module.hot.accept('../../common/containers/Developers', () => run(<Developers />))
}