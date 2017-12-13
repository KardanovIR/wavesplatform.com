import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';

import { getColumnStyles } from './styles';

const styles = getColumnStyles;

const Column = ({
  classes,
  className: classNameProp,
  children,

  xs,
  sm,
  md,
  lg,
  xl,

  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,

  theme, // eslint-disable-line
  sheet, // eslint-disable-line

  ...rest
}) => {
  const className = cn(
    classes.col,
    {
      [classes['xs']]: xs === true,
      [classes[`xs-${String(xs)}`]]: xs && xs !== true,
      [classes['sm']]: sm === true,
      [classes[`sm-${String(sm)}`]]: sm && sm !== true,
      [classes['md']]: md === true,
      [classes[`md-${String(md)}`]]: md && md !== true,
      [classes['lg']]: lg === true,
      [classes[`lg-${String(lg)}`]]: lg && lg !== true,
      [classes['xl']]: xl === true,
      [classes[`xl-${String(xl)}`]]: xl && xl !== true,
      [classes[`xs-offset-${String(xsOffset)}`]]: xsOffset !== undefined,
      [classes[`sm-offset-${String(smOffset)}`]]: smOffset !== undefined,
      [classes[`md-offset-${String(mdOffset)}`]]: mdOffset !== undefined,
      [classes[`lg-offset-${String(lgOffset)}`]]: lgOffset !== undefined,
      [classes[`xl-offset-${String(xlOffset)}`]]: xlOffset !== undefined,
    },
    classNameProp
  );

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

Column.defaultProps = {
  className: '',
};

export default injectSheet(styles)(Column);
