import { Children } from 'react';

import handleClickOutside from '../../hoc/handleClickOutside';

const HandleClickOutside = handleClickOutside(({ children }) =>
  Children.only(children)
);

export default HandleClickOutside;
