import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from 'dom-helpers/style';
import raf from 'raf';
import cx from 'classnames';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import Portal from './lib/Portal';
import Fade from './lib/Fade';
import IOSNoBodyScroll from './lib/iOSNoBodyScroll';

import injectSheet from 'react-jss';
import styles from './style';
import canUseDom from '../../utils/canUseDOM';

const SCROLLBAR_SIZE = getScrollbarSize();

const CloseButton = ({ onClick, ...rest }) => (
  <button onClick={onClick} onTouchMove={e => e.preventDefault()} {...rest} />
);

class Popup extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    show: false,
  };

  componentWillMount() {
    this.setState({
      show: this.props.show,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.show && !nextProps.show) {
      this.setState({ show: false });
    }

    if (!this.props.show && nextProps.show) {
      this.open();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.show !== nextState.show || this.props.show !== nextProps.show;
  }

  open = () => {
    style(document.body, {
      overflow: 'hidden',
      paddingRight: SCROLLBAR_SIZE + 'px',
    });

    raf(() => this.setState({ show: true }));
  };

  close = () => {
    style(document.body, {
      overflow: '',
      paddingRight: '',
    });
  };

  render() {
    if (!canUseDom) {
      return null;
    }

    const { onClose, children, classes, inverted } = this.props;
    const { show } = this.state;

    return (
      <Portal>
        <IOSNoBodyScroll on={show}>
          {({ rootRef, containerRef }) => (
            <div>
              <Fade
                appear
                unmountOnExit
                in={show}
                className={classes.textContainer}
                onExited={this.close}
                innerRef={rootRef}
              >
                <div className={classes.textOuter}>
                  <CloseButton
                    onClick={onClose}
                    className={cx(classes.closeButton, { [classes.closeButtonInverted]: inverted })}
                  />
                  <div className={classes.text} ref={containerRef}>
                    {children}
                  </div>
                </div>
              </Fade>
            </div>
          )}
        </IOSNoBodyScroll>
      </Portal>
    );
  }
}

export default injectSheet(styles)(Popup);
