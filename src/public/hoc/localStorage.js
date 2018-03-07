import React, { Component } from 'react';

import { isLocalStorageAvailable } from '../utils/isLocalStorageAvailable';

export const withLocalStorage = field => WrappedComponent =>
  class WithLocalStorage extends Component {
    constructor(props) {
      super(props);
      this.available = isLocalStorageAvailable();
      this.initialValue = this.getInitialValue();
      this.state = { value: this.initialValue };
    }
    forceUpdate() {
      this.setState({ seed: Math.random() });
    }
    getInitialValue() {
      return this.available ? localStorage[field] : undefined;
    }

    handleLocalStorageUpdate = newValue => {
      if (this.available) {
        localStorage[field] = newValue;
        this.setState({ value: newValue });
      }
    };

    render() {
      return (
        <WrappedComponent
          onLocalStorageUpdate={this.handleLocalStorageUpdate}
          initialValue={this.getInitialValue}
          value={this.state.value}
          {...this.props}
        />
      );
    }
  };
