import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';

import IconsMap from './lib';

const IconProduct = ({ classes, className, name, circle, style, size }) => {
  const IconComponent = IconsMap[name];

  if (process.env.NODE_ENV !== 'production') {
    if (!IconComponent) console.warn(`Icon '${name}' not found. Please check icon imports`);
  }

  const wrapperStyles = cn(
    {
      [classes.root]: !size,
      [classes.centered]: circle,
      [classes.rootCustomSize]: size,
    },
    className
  );

  return (
    <div className={wrapperStyles} style={style}>
      <div className={classes.innerWrapper}>
        <IconComponent />
      </div>
    </div>
  );
};

IconProduct.propTypes = {
  name: PropTypes.string.isRequired,
};

export default injectSheet(styles)(IconProduct);
