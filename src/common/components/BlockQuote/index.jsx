import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

import cn from 'classnames';

const styles = () => ({
  'wrapper-right': {
    textAlign: 'right',
  },
});

const BlockQuote = ({ classes, className, children, align }) => (
  <div className={cn(classes[`wrapper-${align}`], className)}>
    <Typography type="quote" align={align} cut={30}>
      {children}
    </Typography>
  </div>
);

BlockQuote.defaultProps = {
  align: 'left',
};

export default injectSheet(styles)(BlockQuote);
