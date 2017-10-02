import React, { Component } from 'react';

import { map, mapObjIndexed, empty } from 'ramda';

import { combineRules } from '../utils/validation';



const hasErrors = R.compose(
    R.lt(0),
    R.sum,
    R.map(R.length),
    R.values
)


/**
 * 
 * @param {object} fieldRules
 * object with
 * keys — form fields
 * values — array of rules applied to them
 * Example:
 * {
 *  username: [isEmpty],
 *  email: [isEmpty, isEmailInvalid]
 * }
 */
export const withValidation = fieldRules => WrappedForm =>
    class FormWithValidation extends Component {
        static defaultProps = {
            onSubmit: () => {}
        }

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

        handleSubmit = (...args) => {
            if (!hasErrors(this.state.errors)) {
                this.props.onSubmit(...args);
            }
        }

        render() {
            return (
                <WrappedForm
                    onValidate={this.validate}
                    onValidationStart={this.showErrors}
                    onSubmit={this.handleSubmit}
                    { ...this.state }
                    { ...this.props }
                />
            )
        }
    }