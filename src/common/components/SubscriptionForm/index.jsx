import React, { Component } from 'react';

import Button from 'src/common/components/Button';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Input from 'src/common/components/Input';
import Icon from 'src/common/components/Icon';

import ErrorMessage from './lib/ErrorMessage';

import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import { compose } from 'ramda';

const messages = defineMessages({
  placeholderEmail: {
    id: 'form.placeholderEmail',
    defaultMessage: 'Email',
  },
});

class SubscriptionForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
    onEmailChange: () => {},
    initialEmail: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.initialEmail,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = e => {
    this.setState({
      email: e.target.value,
    });
    this.props.onEmailChange(e.target.value);
  };

  handleStartOver = e => {
    e.preventDefault();
    this.props.onStartOver();
  };

  render() {
    const { classes, errors, showErrors, status, onStartOver, intl } = this.props;

    const invalid = !!(showErrors && errors.email.length);

    return (
      <div className={classes.wrapper}>
        {(status === 'idle' || status === 'pending') && (
          <form onSubmit={this.handleSubmit}>
            <div className={classes.inputs}>
              <div className={classes.inputWrapper}>
                <Input
                  className={classes.input}
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                  onBlur={this.props.onBlur}
                  placeholder={intl.formatMessage(messages.placeholderEmail)}
                  invalid={invalid}
                />
              </div>

              <div className={classes.buttonWrapper}>
                <Button
                  className={classes.button}
                  loading={status === 'pending'}
                  type="submit"
                  bordered
                  inverted
                  disabled={invalid}
                >
                  <span className={classes.buttonFull}>
                    <FormattedMessage id="form.submit" defaultMessage="Submit" />
                  </span>
                  <span className={classes.buttonIcon}>
                    <Icon name="send" size={26} />
                  </span>
                </Button>
              </div>
            </div>

            {showErrors && <ErrorMessage errors={errors.email} />}
          </form>
        )}

        {status === 'subscribed' && (
          <div>
            <Typography type="quote" inverted align="center" className={classes.textGray}>
              <FormattedMessage
                id="form.thanksSubscribe"
                defaultMessage="Thanks for subscribing! We will soon post you at {email}."
                values={{
                  email: (
                    <Typography inverted tagName="span">
                      {this.state.email}
                    </Typography>
                  ),
                }}
              />
            </Typography>
            <Margin bottom={1} />
            <Typography type="body" inverted align="center">
              <Link className={classes.textGray} pseudo inverted onClick={this.handleStartOver}>
                <FormattedMessage id="form.anotherEmail" defaultMessage="Another email" />
              </Link>
            </Typography>
          </div>
        )}

        {status === 'error' && (
          <div>
            <Typography type="quote" inverted align="center" className={classes.textGray}>
              <FormattedMessage id="form.error" defaultMessage="Sorry, something went wrong..." />
            </Typography>
            {!!onStartOver && (
              <Typography type="body" inverted align="center">
                <Margin top={1} />
                <Link className={classes.textGray} pseudo inverted onClick={this.handleStartOver}>
                  <FormattedMessage id="form.retry" defaultMessage="Try again" />
                </Link>
              </Typography>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default compose(injectSheet(styles), injectIntl)(SubscriptionForm);
