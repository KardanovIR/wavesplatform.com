import React, { Component } from 'react';

import { compose } from 'ramda';



import { createValidation } from '../../../public/hoc/validation';
import { isEmpty, isEmailInvalid } from '../../../public/utils/validation/rules';


// generic validation HOC
const withGenericValidation = createValidation({ email: [isEmpty, isEmailInvalid] })



// email validation HOC
const withEmailValidationAdapter = Form =>
    class ValidatedEmailForm extends Component {
        handleSubmit = state => {
            this.props.onValidate(state);
            this.props.onSubmit();
        }

        handleEmailChange = newValue => this.props.onValidate({ email: newValue })

        render() {
            const {
            validate, // eslint-disable-line
                ...rest
            } = this.props;

            return (
                <Form
                    onSubmit={this.handleSubmit}
                    onEmailChange={this.handleEmailChange}
                    { ...rest }
                />
            )
        }
    }



export const withEmailValidation = compose(
    withGenericValidation,
    withEmailValidationAdapter
);