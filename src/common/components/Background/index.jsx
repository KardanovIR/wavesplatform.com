import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'visible',

    // @HACK to force compositing
    // for smooth overlaying element animations
    '-webkit-backface-visibility': 'hidden',
    backfaceVisibility: 'hidden',
  },
  background: {
    position: 'absolute',
    width: '100vw',
    minWidth: 2560,
    height: '100%',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    zIndex: -1,
  },
};

const Background = ({
  classes,
  children,
  className,
  wrapperClassName,
  style,
}) => (
  <div className={cn(classes.wrapper, wrapperClassName)}>
    <div className={cn(classes.background, className)} style={style} />
    {children}
  </div>
);

Background.defaultProps = {
  className: '',
  wrapperClassName: '',
  skewed: false,
};

export default injectSheet(styles)(Background);
