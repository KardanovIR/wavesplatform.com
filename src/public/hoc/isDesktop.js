import React from 'react';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints.js';

const withIsDesktopFlag = WrappedComponent => props => (
  <MQ query={query.md}>
    {matches => <WrappedComponent {...props} isDesktop={matches} />}
  </MQ>
);

export default withIsDesktopFlag;
