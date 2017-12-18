import React from 'react';

import Circle from './Circle';
import Points from './Points';

function Spinner({ type, ...rest }) {
  return type === 'circle' ? <Circle {...rest} /> : <Points {...rest} />;
}

Spinner.defaultProps = {
  type: 'circle',
};

export default Spinner;
