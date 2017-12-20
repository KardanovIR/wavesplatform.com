import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';
import styles from './styles';

export const Panel = ({
  classes,
  className,
  type,

  sheet, // eslint-disable-line
  theme, // eslint-disable-line

  element: Element,

  ...rest
}) => (
  <Element
    className={cn(
      classes.root,
      {
        [classes.light]: type === 'light',
        [classes.dark]: type === 'dark',
        [classes.bordered]: type === 'bordered',
      },
      className
    )}
    {...rest}
  />
);

Panel.defaultProps = {
  element: 'div',
  type: 'light',
};

export default injectSheet(styles)(Panel);
