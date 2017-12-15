import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

const Section = ({
  classes,
  className: classNameProp,

  theme, // eslint-disable-line
  sheet, // eslint-disable-line

  top,
  bottom,
  size,

  ...rest
}) => {
  const noSizeSpecified =
    typeof top === 'undefined' && typeof bottom === 'undefined' && typeof size === 'undefined';

  const className = classNames(
    {
      [classes['padding-top-3']]: top === true || noSizeSpecified,
      [classes[`padding-top-${String(top)}`]]: typeof top === 'number',

      [classes['padding-bottom-3']]: bottom === true || noSizeSpecified,
      [classes[`padding-bottom-${String(bottom)}`]]: typeof bottom === 'number',

      [classes[`padding-top-${String(size)}`]]: typeof size === 'number',
      [classes[`padding-bottom-${String(size)}`]]: typeof size === 'number',
    },
    classes.root,
    classNameProp
  );

  return <div className={className} {...rest} />;
};

Section.protTypes = {
  top: PropTypes.oneOf([true, 2, 3, 4]),
  bottom: PropTypes.oneOf([true, 2, 3, 4]),
  size: PropTypes.oneOf([true, 2, 3, 4]),
};

export default injectSheet(styles)(Section);
