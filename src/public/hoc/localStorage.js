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
          initialValue={this.initialValue}
          currentValue={this.state.value}
          {...this.props}
        />
      );
    }
  };
