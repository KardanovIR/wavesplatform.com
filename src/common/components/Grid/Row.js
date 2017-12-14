import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.getSpacing(0, -1.5),
  },
  centered: {
    justifyContent: 'center',
  },
  'direction-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'align-items-center': {
    alignItems: 'center',
  },
  'align-items-left': {
    alignItems: 'left',
  },
});

const Row = ({
  classes,
  className: classNameProp,
  style,
  children,
  centered,
  direction,
  alignItems,
}) => {
  const className = cn(
    classes.row,
    {
      [classes.centered]: centered,
      [classes[`direction-${direction}`]]: direction,
      [classes[`align-items-${alignItems}`]]: alignItems,
    },
    classNameProp
  );

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Row.propTypes = {
  direction: PropTypes.oneOf(['row-reverse']),
  alignItems: PropTypes.oneOf(['center', 'left']),
};

Row.defaultProps = {
  centered: false,
};

export default injectSheet(styles)(Row);
