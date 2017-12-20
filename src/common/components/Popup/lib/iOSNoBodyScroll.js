import React, { Component } from 'react';
import PropTypes from 'prop-types';

const preventEvent = e => e.preventDefault();

class IOSNoBodyScroll extends Component {
  static propTypes = {
    on: PropTypes.bool.isRequired,
    layoutContainerID: PropTypes.string,
    rootProps: PropTypes.object,
    containerProps: PropTypes.object,
  };

  static defaultProps = {
    layoutContainerID: '#app',
  };

  componentDidMount() {
    if (this.props.on) {
      this.hold();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.on && !nextProps.on) {
      this.release();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.on && this.props.on) {
      this.hold();
    }
  }

  componentWillUnmount() {
    this.release();
  }

  hold = () => {
    const $cc = document.querySelector(this.props.layoutContainerID);
    $cc && $cc.addEventListener('scroll', this.blockScroll);
    $cc && $cc.addEventListener('touchmove', this.blockScroll);
    this.$root.addEventListener('touchstart', this.blockMenuScroll);
    this.$root.addEventListener('touchmove', this.blockMenuScroll);
  };

  release = () => {
    const $cc = document.querySelector(this.props.layoutContainerID);
    $cc && $cc.removeEventListener('scroll', this.blockScroll);
    $cc && $cc.removeEventListener('touchmove', this.blockScroll);
    this.$root &&
      this.$root.removeEventListener('touchstart', this.blockMenuScroll);
    this.$root &&
      this.$root.removeEventListener('touchmove', this.blockMenuScroll);
  };

  blockScroll = e => this.props.on && preventEvent(e);

  _startY = false;

  blockMenuScroll = event => {
    if (this.props.on) {
      const e = event.touches ? event.touches[0] : event;
      const pageY = e.pageY || 0;

      const actions = {
        touchstart: () => {
          this._startY = pageY;
        },
        touchmove: () => {
          if (this._startY !== false) {
            if (pageY - this._startY > 0) {
              this.$container.scrollTop <= 0 && preventEvent(event);
            } else {
              this.$container.scrollTop >=
                this.$container.scrollHeight - this.$container.offsetHeight &&
                preventEvent(event);
            }

            this._startY = false;
          }
        },
      };

      actions[event.type] && actions[event.type].call(null);
    }
  };

  render() {
    const { children, rootProps } = this.props;

    return (
      <div {...rootProps}>
        {typeof children === 'function' &&
          children({
            rootRef: ref => (this.$root = ref),
            containerRef: ref => (this.$container = ref),
          })}
      </div>
    );
  }
}

export default IOSNoBodyScroll;
