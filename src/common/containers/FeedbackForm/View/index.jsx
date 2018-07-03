import React from 'react';

// redux-form
import Input from 'src/common/components/Input';
import Select from 'src/common/components/Select';

// components
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Icon from 'src/common/components/Icon';
import Typography from 'src/common/components/Typography';

// error message
import FormFieldError from 'src/common/components/Form/FormFieldError';
import FormFieldConsent from 'src/common/components/Form/FormFieldConsent';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

import injectSheet from 'react-jss';
import styles from './styles';

import { compose, memoize } from 'ramda';

class FeedbackFormView extends React.Component {
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
    const { classes, hasErrors, showErrors, values, status, intl } = this.props;
    const invalid = Boolean(hasErrors && showErrors);
    return (
      <div>
        {(status === 'idle' || status === 'pending') && (
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={12} sm={6}>
                <div className={classes.inputWrapper}>
                  <Select
                    name="reason"
                    className={classes.input}
                    onChange={this.handleChange('reason')}
                    value={values.reason}
                    invalid={invalid}
                    options={[
                      {
                        value: '',
                        name: intl.formatMessage(messages.chooseTopic),
                      },
                      {
                        value: 'partnership',
                        name: intl.formatMessage(messages.partnership),
                      },
                      {
                        value: 'events',
                        name: intl.formatMessage(messages.events),
                      },
                      {
                        value: 'media',
                        name: intl.formatMessage(messages.media),
                      },
                      {
                        value: 'jobs',
                        name: intl.formatMessage(messages.jobs),
                      },
                      {
                        value: 'icoBusiness',
                        name: intl.formatMessage(messages.icoBusiness),
                      },
                      {
                        value: 'icoTechnical',
                        name: intl.formatMessage(messages.icoTechnical),
                      },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className={classes.inputWrapper}>
                  <Input
                    name="email"
                    className={classes.input}
                    type="text"
                    invalid={invalid}
                    value={values.email}
                    onChange={this.handleChange('email')}
                    placeholder={intl.formatMessage(messages.placeholderEmail)}
                  />
                </div>
              </Col>

              <Col xs={12}>
                <div className={classes.inputWrapper}>
                  <Input
                    name="message"
                    tagName="textarea"
                    className={classes.input}
                    invalid={invalid}
                    value={values.message}
                    onChange={this.handleChange('message')}
                    placeholder={intl.formatMessage(
                      messages.placeholderMessage
                    )}
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className={classes.inputWrapper}>
                  <FormFieldConsent
                    invalid={invalid}
                    inverted
                    wrapperClassName={classes.checkboxesContainer}
                    agreeCookies={values.agreeCookies}
                    agreeNews={values.agreeNews}
                    onCookiesChange={this.handleChange(
                      'agreeCookies',
                      'checked'
                    )}
                    onNewsChange={this.handleChange('agreeNews', 'checked')}
                  />
                </div>
              </Col>
              <Col xs={12}>
                {invalid && (
                  <div className={classes.inputWrapper}>
                    <FormFieldError inverted>
                      <FormattedMessage
                        id="formFeedback.errorMessage"
                        defaultMessage="Please enter a valid email address, choose a topic and write a message. Then agree to the privacy policy and to receive marketing information before clicking Submit"
                      />
                    </FormFieldError>
                  </div>
                )}
              </Col>
              <Col xs={3}>
                <Button
                  className={classes.button}
                  loading={status === 'pending'}
                  type="submit"
                  bordered
                  inverted
                  disabled={invalid}
                >
                  <span className={classes.buttonFull}>
                    <FormattedMessage
                      id="form.submit"
                      defaultMessage="Send Message"
                    />
                  </span>
                  <span className={classes.buttonIcon}>
                    <Icon name="send" size={26} />
                  </span>
                </Button>
              </Col>
            </Row>
          </form>
        )}

        {status === 'success' && (
          <div>
            <Typography
              type="quote"
              inverted
              align="center"
              className={classes.textGray}
            >
              <FormattedMessage
                id="formFeedback.success"
                defaultMessage="Thank you! We appreciate your feedback."
              />
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
              <FormattedMessage
                id="formFeedback.error"
                defaultMessage="Sorry, something went wrong... Please refresh the page and try again."
              />
            </Typography>
          </div>
        )}
      </div>
    );
  }
}
export default compose(
  injectSheet(styles),
  injectIntl
)(FeedbackFormView);
