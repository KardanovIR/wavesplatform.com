import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'ramda';

import SubscriptionForm from '../../components/SubscriptionForm';


// validation
import { withValidation } from '../../../public/hoc/validation';
import { isEmpty, isEmailInvalid } from '../../../public/utils/validation';


// for submit
import { handleFetchError } from '../../../public/utils/handleFetchError';


// localStorage read and write email
import { withLocalStorage } from '../../../public/hoc/localStorage';



class SubscriptionFormContainer extends Component {
    static propTypes = {
        // local storage
        initialValue: PropTypes.any,
        onLocalStorageUpdate: PropTypes.func,

        // validation
        onValidate: PropTypes.func,
        onValidationStart: PropTypes.func,
        errors: PropTypes.shape({
            email: PropTypes.arrayOf(PropTypes.string)
        }),
        showErrors: PropTypes.bool,
    }

    constructor(props) {
        super(props);

        // status: 'idle' | 'pending' | 'subscribed' | 'error'
        this.state = {
            status: this.props.initialValue ? 'subscribed' : 'idle'
        }
    }

    componentDidMount() {
        // trigger change for initial value
        this.handleEmailChange(this.props.initialValue || '');
    }

    sendForm = email => {
        this.setState({ status: 'pending' });
        fetch('/api/subscription', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email })
        })
            .then(handleFetchError)
            .then(() => this.setState({ status: 'subscribed' }))
            .catch(err => {
                console.warn(err);
                this.setState({ status: 'error' });
            })
    }

    handleEmailChange = newValue => this.props.onValidate({ email: newValue })

    handleSubmit = formData => {
        this.props.onValidate(formData);

        if (!this.props.errors.email.length) {
            this.sendForm(formData.email);
            this.props.onLocalStorageUpdate(formData.email);
        }
    }

    handleStartOver = () => {
        this.setState({ status: 'idle' })
    }

    handleBlur = e => {
        if (e.target.value) this.props.onValidationStart();
    }

    render() {
        const {
            initialValue,
            errors,
            showErrors
        } = this.props;

        return (
            <SubscriptionForm
                onSubmit={this.handleSubmit}
                onBlur={this.handleBlur}
                onEmailChange={this.handleEmailChange}
                onStartOver={this.handleStartOver}
                status={this.state.status}
                initialEmail={initialValue}
                errors={errors}
                showErrors={showErrors}
            />
        )
    }
}




export default compose(
    withLocalStorage('subscriptionEmail'),
    withValidation({ email: [isEmpty, isEmailInvalid] }),
)(SubscriptionFormContainer);