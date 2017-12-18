import React from 'react';
import { keys as breakpointKeys } from 'src/common/theme/breakpoints';
import capitalizeFirstLetter from 'src/common/utils/capitalizeFirstLetter';

import injectSheet from 'react-jss';

const styles = theme => {
  const hidden = {
    display: 'none',
  };

  return breakpointKeys.reduce((styles, key) => {
    styles[`only${capitalizeFirstLetter(key)}`] = {
      [theme.breakpoints.only(key)]: hidden,
    };
    styles[`${key}Up`] = {
      [theme.breakpoints.up(key)]: hidden,
    };
    styles[`${key}Down`] = {
      [theme.breakpoints.down(key)]: hidden,
    };

    return styles;
  }, {});
};

function Hidden(props) {
  const {
    children,
    classes,
    only,
    xsUp,
    smUp,
    mdUp,
    lgUp,
    xlUp,
    xsDown,
    smDown,
    mdDown,
    lgDown,
    xlDown,
    ...other
  } = props;

  const className = [];

  breakpointKeys.forEach(key => {
    const breakpointUp = props[`${key}Up`];
    const breakpointDown = props[`${key}Down`];

    if (breakpointUp) {
      className.push(classes[`${key}Up`]);
    }
    if (breakpointDown) {
      className.push(classes[`${key}Down`]);
    }
  });

  if (only) {
    if (typeof only === 'string') {
      className.push(classes[`only${capitalizeFirstLetter(only)}`]);
    } else {
      only.forEach(bp =>
        className.push(classes[`only${capitalizeFirstLetter(bp)}`])
      );
    }
  }

  return <span className={className.join(' ')}>{children}</span>;
}

export default injectSheet(styles)(Hidden);
