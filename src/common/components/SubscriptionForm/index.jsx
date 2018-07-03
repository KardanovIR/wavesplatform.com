import React, { Component } from 'react';

import Button from 'src/common/components/Button';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Input from 'src/common/components/Input';
import Icon from 'src/common/components/Icon';
import FormFieldError from 'src/common/components/Form/FormFieldError';
import FormFieldConsent from 'src/common/components/Form/FormFieldConsent';

import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import { compose, memoize } from 'ramda';

const messages = defineMessages({
  placeholderEmail: {
    id: 'form.placeholderEmail',
    defaultMessage: 'Email',
  },
});

class SubscriptionForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };
  handleChange = memoize((field, valueField = 'value') => e =>
    this.props.onValueChange(field, e.target[valueField])
  );

  handleStartOver = e => {
    e.preventDefault();
    this.props.onStartOver();
  };

  render() {
    const {
      classes,
      hasErrors,
      showErrors,
      values,
      status,
      onStartOver,
      intl,
    } = this.props;

    const invalid = Boolean(showErrors && hasErrors);

    return (
      <div className={classes.wrapper}>
        {(status === 'idle' || status === 'pending') && (
          <form onSubmit={this.handleSubmit}>
            <div className={classes.inputs}>
              <div className={classes.inputWrapper}>
                <Input
                  className={classes.input}
                  type="text"
                  value={values.email}
                  onChange={this.handleChange('email')}
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
                    <FormattedMessage id="form.submit" />
                  </span>
                  <span className={classes.buttonIcon}>
                    <Icon name="send" size={26} />
                  </span>
                </Button>
              </div>
            </div>
            <div className={classes.checkboxesContainer}>
              <FormFieldConsent
                invalid={invalid}
                inverted
                wrapperClassName={classes.checkboxesContainer}
                agreeCookies={values.agreeCookies}
                agreeNews={values.agreeNews}
                onCookiesChange={this.handleChange('agreeCookies', 'checked')}
                onNewsChange={this.handleChange('agreeNews', 'checked')}
              />
              {invalid && (
                <FormFieldError inverted>
                  <FormattedMessage
                    id="form.errorMessage"
                    defaultMessage="Please enter a valid email address, then agree to the privacy policy and to receive marketing information."
                  />
                </FormFieldError>
              )}
            </div>
          </form>
        )}

        {status === 'subscribed' && (
          <div>
            <Typography
              type="quote"
              inverted
              align="center"
              className={classes.textGray}
            >
              <FormattedMessage
                id="form.thanksSubscribe"
                values={{
                  email: (
                    <Typography inverted tagName="span">
                      {values.email}
                    </Typography>
                  ),
                }}
              />
            </Typography>
            <Margin bottom={1} />
            <Typography type="body" inverted align="center">
              <Link
                className={classes.textGray}
                pseudo
                inverted
                onClick={this.handleStartOver}
              >
                <FormattedMessage id="form.anotherEmail" />
              </Link>
            </Typography>
          </div>
        )}

        {status === 'error' && (
          <div>
            <Typography
              type="quote"
              inverted
              align="center"
              className={classes.textGray}
            >
              <FormattedMessage id="form.error" />
            </Typography>
            {!!onStartOver && (
              <Typography type="body" inverted align="center">
                <Margin top={1} />
                <Link
                  className={classes.textGray}
                  pseudo
                  inverted
                  onClick={this.handleStartOver}
                >
                  <FormattedMessage id="form.retry" />
                </Link>
              </Typography>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default compose(
  injectSheet(styles),
  injectIntl
)(SubscriptionForm);
