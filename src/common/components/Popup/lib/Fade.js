import React from 'react';
import injectSheet from 'react-jss';
import Transition, {
  ENTERING,
  ENTERED,
  EXITED,
  EXITING,
} from 'react-transition-group/Transition';
import cx from 'classnames';

const s = {
  [ENTERING]: {
    opacity: 0,
  },
  [ENTERED]: {
    transition: 'opacity .25s ease-out',
    opacity: 1,
  },
  [EXITING]: {
    transition: 'opacity .25s ease-out',
    opacity: 0,
  },
  [EXITED]: {
    opacity: 0,
  },
};

const FadeTransition = ({
  children,
  classes,
  className,
  onClick,
  sheet,
  innerRef,
  ...rest
}) => (
  <Transition
    timeout={{
      enter: 0,
      exit: 300,
    }}
    {...rest}
  >
    {(state, innerProps) => (
      <div
        {...innerProps}
        className={cx(className, classes[state])}
        onClick={onClick}
        ref={innerRef}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default injectSheet(s)(FadeTransition);
