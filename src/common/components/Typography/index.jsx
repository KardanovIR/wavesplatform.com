import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

const Typography = ({
  classes,
  className: classNameProp,
  style,
  cut,
  type,
  tagName,
  tagMap,
  children,
  align,
  alignMobile,
  inverted,
  dimmed,
  noMargin,
}) => {
  const Tag = tagName || tagMap[type];

  const className = cn(
    classes[type],
    {
      [classes[`align-${String(align)}`]]: true,
      [classes.noMargin]: noMargin,
      [classes.inverted]: inverted && !dimmed,
      [classes.dimmed]: dimmed,
      [classes.cut]: cut,
    },
    classNameProp
  );

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

Typography.defaultProps = {
  type: 'body',
  tagName: '',
  tagMap: {
    display5: 'h1',
    display4: 'h1',
    display3: 'h2',
    display3Inverted: 'h2',
    display2: 'h3',
    display1: 'h4',
    displayCustom: 'h1',
    body: 'div',
    body2: 'div',
    quote: 'div',
    numeral: 'div',
    muted: 'div',
  },
  className: '',
  align: 'left',
  alignMobile: 'left',
};

const types = [
  'display5',
  'display4',
  'display3',
  'display3Inverted',
  'display2',
  'display1',
  'displayCustom',
  'body',
  'body2',
  'quote',
  'muted',
  'numeral',
];

Typography.propTypes = {
  type: PropTypes.oneOf(types).isRequired,
  cut: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  inverted: PropTypes.bool,
  dimmed: PropTypes.bool,
  weight: PropTypes.number,
};

export default injectSheet(styles)(Typography);
