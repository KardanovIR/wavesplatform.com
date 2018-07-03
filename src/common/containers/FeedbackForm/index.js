import React, { Component } from 'react';

import sendToApi from 'src/public/utils/sendToApi';

import View from './View/index';

// validation
import { withValidation } from '../../../public/hoc/validation';
import {
  isEmpty,
  isEmailInvalid,
  isNotChecked,
} from '../../../public/utils/validation';

// for submit
const getDefaultState = () => ({
  // status: 'idle' | 'pending' | 'success' | 'error'
  status: 'idle',
  values: {
    email: '',
    reason: '',
    message: '',
    agreeCookies: '',
    agreeNews: '',
  },
});

class FeedbackFormContainer extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);
    this.state = getDefaultState();
    this.props.onValidate(this.state.values);
  }

  componentWillUpdate(_, nextState) {
    if (nextState !== this.state) {
      this.props.onValidate(nextState.values);
    }
  }

  handleChange = (field, value) =>
    this.setState(({ values, ...rest }) => ({
      ...rest,
      values: { ...values, [field]: value },
    }));

  handleSubmit = () => {
    const { values } = this.state;
    this.props.onValidationStart();

    if (!this.props.hasErrors) {
      this.setState({ status: 'pending' });
      this.props.onSubmit();
      sendToApi('feedback', values)
        .then(() => this.setState({ status: 'success' }))
        .catch(err => {
          console.warn(err); // eslint-disable-line no-console
          this.setState({ status: 'error' });
        });
    }
  };

  handleStartOver = () => {
    this.props.onValidationStop();
    this.setState(getDefaultState());
  };

  handleBlur = e => {
    if (e.target.value) this.props.onValidationStart();
  };

  render() {
    const { hasErrors, showErrors } = this.props;

    return (
      <View
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

export default withValidation({
  email: [isEmpty, isEmailInvalid],
  reason: [isEmpty],
  message: [isEmpty],
  agreeCookies: [isNotChecked],
  agreeNews: [isNotChecked],
})(FeedbackFormContainer);
