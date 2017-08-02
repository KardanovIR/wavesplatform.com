import React, { Component } from 'React';

import { map, mapObjIndexed, empty } from 'ramda';

import { combineRules } from '../utils/validation';


export const createValidation = fieldRules => WrappedForm => 
    class FormWithValidation extends Component {
        constructor(props) {
            super(props);
            this.state = {
                errors: map(empty, fieldRules),   // create empty error arrays
                showErrors: false
            }

            // object of value => errorCode[]
            this.validatingFunctions = map(combineRules, fieldRules);
        }

        validate = fields => {
            /* validates each field present in 'fields' with corresponding
            validation function and updates errors */
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    ...mapObjIndexed(
                        (value, key) => this.validatingFunctions[key](value),
                        fields
                    )
                }
            }))
        }

        showErrors = () => {
            this.setState({ showErrors: true })
        }

        render() {
            return (
                <WrappedForm
                    onValidate={this.validate}
                    onSubmit={this.showErrors}
                    { ...this.state }
                    { ...this.props }
                />
            )
        }
    }