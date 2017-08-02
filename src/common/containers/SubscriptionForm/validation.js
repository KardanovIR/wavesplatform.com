import React, { Component } from 'react';

import { compose } from 'ramda';



import { createValidation } from '../../../public/hoc/validation';
import { isEmpty, isEmailInvalid } from '../../../public/utils/validation/rules';




// email validation HOC
const withEmailValidationAdapter = Form =>
    class ValidatedEmailForm extends Component {
        handleEmailChange = newValue => this.props.onValidate({ email: newValue })

        render() {
            const {
            validate, // eslint-disable-line
                ...rest
            } = this.props;

            return (
                <Form
                    onSubmit={this.props.onValidate}
                    onBlur={this.props.onValidationStart}
                    onEmailChange={this.handleEmailChange}
                    { ...rest }
                />
            )
        }
    }



export const withEmailValidation = compose(
    createValidation({ email: [isEmpty, isEmailInvalid] }),
    withEmailValidationAdapter
);