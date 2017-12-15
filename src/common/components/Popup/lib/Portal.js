import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import canUseDOM from 'src/common/utils/canUseDOM';

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.el.parentNode.removeChild(this.el);
  }

  render() {
    if (!canUseDOM) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
