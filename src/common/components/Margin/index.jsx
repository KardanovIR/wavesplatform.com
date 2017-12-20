import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

const Margin = ({
  classes,
  className: classNameProp,
  theme, // eslint-disable-line
  sheet, // eslint-disable-line

  top,
  right,
  bottom,
  left,

  xsOnly,

  display,

  ...rest
}) => {
  const noMarginSpecified =
    typeof top === 'undefined' &&
    typeof right === 'undefined' &&
    typeof bottom === 'undefined' &&
    typeof left === 'undefined';

  const className = classNames(
    {
      [classes['margin-top-2']]: top === true,
      [classes[`margin-top-${String(top)}`]]: typeof top === 'number',
      [classes['margin-right-2']]: right === true,
      [classes[`margin-right-${String(right)}`]]: typeof right === 'number',
      [classes['margin-bottom-2']]: bottom === true || noMarginSpecified,
      [classes[`margin-bottom-${String(bottom)}`]]: typeof bottom === 'number',
      [classes['margin-left-2']]: left === true,
      [classes[`margin-left-${String(left)}`]]: typeof left === 'number',
      [classes['inline-block']]: display === 'inline-block',
      [classes.xsOnly]: xsOnly,
    },
    classNameProp
  );

  return <div className={className} {...rest} />;
};

Margin.protTypes = {
  display: PropTypes.oneOf(['inline-block']),
};

export default injectSheet(styles)(Margin);
