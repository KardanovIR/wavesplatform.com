import React, { Component } from 'react';

const handleOutsideClick = WrappedComponent =>
  class OutsideClickable extends Component {
    static defaultProps = {
      whiteList: [],
      active: true,
    };

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.active && !prevProps.active) this.addListeners();
      if (!this.props.active && prevProps.active) this.removeListeners();
    }

    componentDidMount() {
      if (this.props.active) this.addListeners();
    }

    componentWillUnmount() {
      this.removeListeners();
    }

    addListeners() {
      window.addEventListener('touchstart', this.handleClick);
      window.addEventListener('mousedown', this.handleClick);
    }

    removeListeners() {
      window.removeEventListener('touchstart', this.handleClick);
      window.removeEventListener('mousedown', this.handleClick);
    }

    isClickInside = target => node => {
      if (!node) return false;
      if (!target) return true;

      return target === node || node.contains(target);
    };

    handleClick(event) {
      const { wrapper } = this;
      const { target } = event;

      const { onClickOutside, whiteList } = this.props;

      if (typeof onClickOutside !== 'function') {
        return;
      }

      const isClickInsideTarget = this.isClickInside(target);

      const clickInsideWhiteList = whiteList.some(isClickInsideTarget);

      if (!isClickInsideTarget(wrapper) && !clickInsideWhiteList) {
        onClickOutside(event);
      }
    }

    render() {
      const { onClickOutside, ...rest } = this.props; // eslint-disable-line no-unused-vars
      return (
        <span ref={el => (this.wrapper = el)}>
          <WrappedComponent {...rest} />
        </span>
      );
    }
  };

export default handleOutsideClick;
