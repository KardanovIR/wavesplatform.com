import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { subscribe } from 'src/public/actions';

import { compose } from 'ramda';

import SubscriptionForm from '../../components/SubscriptionForm';

// validation
import { withValidation } from '../../../public/hoc/validation';
import {
  isEmpty,
  isEmailInvalid,
  isNotChecked,
} from '../../../public/utils/validation';

// for submit
import sendToApi from 'src/public/utils/sendToApi';

// localStorage read and write email
import { withLocalStorage } from '../../../public/hoc/localStorage';

class SubscriptionFormContainer extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    // local storage
    initialValue: PropTypes.any,
    onLocalStorageUpdate: PropTypes.func,

    // validation
    onValidate: PropTypes.func,
    onValidationStart: PropTypes.func,
    onValidationStop: PropTypes.func,
    errors: PropTypes.shape({
      email: PropTypes.arrayOf(PropTypes.string),
      cookiesConsent: PropTypes.arrayOf(PropTypes.string),
      newsConsent: PropTypes.arrayOf(PropTypes.string),
    }),
    showErrors: PropTypes.bool,

    onSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);

    // status: 'idle' | 'pending' | 'subscribed' | 'error'
    this.state = {
      status: this.props.initialValue ? 'subscribed' : 'idle',
      values: {
        email: this.props.initialValue || '',
        cookiesConsent: false,
        newsConsent: false,
      },
    };
    props.onValidate(this.state.values);
  }

  componentWillUpdate(_, nextState) {
    if (nextState !== this.state) {
      this.props.onValidate(nextState.values);
    }
  }
  sendForm = email => {
    this.setState({ status: 'pending' });

    sendToApi('subscription', { email })
      .then(() => this.setState({ status: 'subscribed' }))
      .catch(() => this.setState({ status: 'error' }));
  };

  handleChange = (field, value) =>
    this.setState(({ values, ...rest }) => ({
      ...rest,
      values: { ...values, [field]: value },
    }));

  handleSubmit = () => {
    const { values } = this.state;
    this.props.onValidationStart();

    if (!this.props.hasErrors) {
      this.sendForm(values.email);
      this.props.onLocalStorageUpdate(values.email);
      this.props.onSubmit(values);
    }
  };

  handleStartOver = () => {
    this.props.onValidationStop();
    this.setState({
      status: 'idle',
      values: {
        email: this.props.initialValue || '',
        cookiesConsent: false,
        newsConsent: false,
      },
    });
  };

  handleBlur = e => {
    if (e.target.value) this.props.onValidationStart();
  };

  render() {
    const { hasErrors, showErrors } = this.props;

    return (
      <SubscriptionForm
        onSubmit={this.handleSubmit}
        onBlur={this.handleBlur}
        onValueChange={this.handleChange}
        onStartOver={this.handleStartOver}
        status={this.state.status}
        values={this.state.values}
        hasErrors={hasErrors}
        showErrors={showErrors}
      />
    );
  }
}

export default compose(
  withLocalStorage('subscriptionEmail'),
  withValidation({
    email: [isEmpty, isEmailInvalid],
    cookiesConsent: [isNotChecked],
    newsConsent: [isNotChecked],
  }),
  connect(
    s => s,
    { onSubmit: subscribe }
  )
)(SubscriptionFormContainer);
