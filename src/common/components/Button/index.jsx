import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from 'src/common/components/Spinner';

import classnames from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

const ButtonElement = ({ children, ...rest }) => (
  <button {...rest}>{children}</button>
);

const AnchorElement = ({ children, ...rest }) => <a {...rest}>{children}</a>;

class Button extends Component {
  state = { loading: false };

  handleClick = () => {
    if (this.props.withLoader) {
      this.setState({ loading: true });
    }
    this.props.onClick();
  };
  
  render() {

    const {
        type,
        href,
        icon,
        classes,
        className,

        // types
        bordered,
        inverted,
        secondary, // eslint-disable-line
        whited,

        children,
        loading,

        withLoader,	// eslint-disable-line
        theme,      // eslint-disable-line
        sheet,      // eslint-disable-line

        ...others,
  } = this.props;

    const showLoader = loading || this.state.loading;

    const buttonElementClasses = classnames(classes.button, {
      [classes.bordered]: bordered,
      [classes.inverted]: bordered && inverted,
      [classes.invertedFill]: !bordered && inverted,
      [classes.light]: !bordered && secondary,
      [classes.dark]: !bordered && !secondary,
      [classes.white]: !bordered && whited,
    }, className);

    const contentWrapperClasses = classnames(
        classes.text,
        classes.content,
        { [classes.contentHidden]: showLoader }
    );

    const Element = href ? AnchorElement : ButtonElement;

    const elementProps = {
      ...others,
      href,
      className: buttonElementClasses,
      type: !href ? type : null,
    };


    return (
      <Element {...elementProps} onClick={this.handleClick}>

        {showLoader && (
          <Spinner className={classes.spinner} />
        )}

        <div className={contentWrapperClasses}>
          {icon &&
            <span className={classes.icon}>
              {icon}
            </span>
          }

          {children &&
            <span className={classes.children}>
              {children}
            </span>
          }
        </div>

      </Element>
    )
  }
}

Button.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  loading: false,
  whited: false,
  onClick: () => {},

  // types
  secondary: false,
  bordered: false,
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
  whited: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])
};

export default injectSheet(styles)(Button);
