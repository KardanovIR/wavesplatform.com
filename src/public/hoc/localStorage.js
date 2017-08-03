import React, { Component } from 'react';


import { isLocalStorageAvailable } from '../utils/isLocalStorageAvailable';



export const withLocalStorage = field => WrappedComponent =>
    class WithLocalStorage extends Component {
        constructor(props) {
            super(props);
            this.available = isLocalStorageAvailable();
            this.initialValue = this.getInitialValue();
        }

        getInitialValue() {
            return this.available ? localStorage[field] : undefined;
        }

        handleLocalStorageUpdate = newValue => {
            if (this.available) {
                localStorage[field] = newValue;
            }
        }

        render() {
            return (
                <WrappedComponent
                    onLocalStorageUpdate={this.handleLocalStorageUpdate}
                    initialValue={this.initialValue}
                    { ...this.props }
                />
            )
        }
    }