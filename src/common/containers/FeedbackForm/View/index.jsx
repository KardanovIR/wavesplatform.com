import React from 'react';
import PropTypes from 'prop-types';

// redux-form
import { Form, Field } from 'redux-form';
import {
    renderInput,
    renderSelect
} from './renderComponents';


// components
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Icon from 'src/common/components/Icon';
// import Typography from 'src/common/components/Typography';
// import Margin from 'src/common/components/Margin';
// import Link from 'src/common/components/Link';
// import Input from 'src/common/components/Input';


// error message
// import ErrorMessage from './lib/ErrorMessage';


import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

import injectSheet from 'react-jss';
import styles from './styles';


import { compose } from 'ramda';





const FeedbackForm = ({
    classes,
    status,
    anyTouched,
    submitting,
    invalid,
    handleSubmit,
    intl
}) => (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={12} sm={6}>
                    <div className={classes.inputWrapper}>
                        <Field
                            name="email"
                            component={renderInput}
                            className={classes.input}
                            type="text"
                            placeholder={intl.formatMessage(messages.placeholderEmail)}
                        />
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    <div className={classes.inputWrapper}>
                        <Field
                            name="reason"
                            component={renderSelect}
                            className={classes.input}
                            options={[
                                {
                                    value: '',
                                    content: intl.formatMessage(messages.chooseTopic)
                                },
                                {
                                    value: 'partnership',
                                    content: intl.formatMessage(messages.partnership)
                                },
                                {
                                    value: 'events',
                                    content: intl.formatMessage(messages.events)
                                },
                                {
                                    value: 'media',
                                    content: intl.formatMessage(messages.media)
                                },
                                {
                                    value: 'jobs',
                                    content: intl.formatMessage(messages.jobs)
                                },
                            ]}
                        />
                    </div>
                </Col>

                <Col xs={12}>
                    <div className={classes.inputWrapper}>
                        <Field
                            name="message"
                            tagName="textarea"
                            component={renderInput}
                            className={classes.input}
                            placeholder={intl.formatMessage(messages.placeholderMessage)}
                        />
                    </div>
                </Col>

                <Col xs={12}>
                    <Button
                        className={classes.button}
                        // loading={status === "pending"}
                        loading={submitting}
                        type="submit"
                        secondary
                        disabled={anyTouched && invalid}
                    >
                        <span className={classes.buttonFull}>
                            <FormattedMessage
                                id="form.submit"
                                defaultMessage="Submit"
                            />
                        </span>
                        <span className={classes.buttonIcon}><Icon name="send" size={26} /></span>
                    </Button>
                </Col>
            </Row>


            {/* {showErrors && <ErrorMessage errors={errors.email} />} */}



            {/* {status === 'subscribed' && (
                        <div>
                            <Typography type="quote" inverted align="center" className={classes.textGray}>
                                <FormattedMessage
                                    id="form.thanksSubscribe"
                                    defaultMessage="Thanks for subscribing! We will soon post you at {email}."
                                    values={{ email: <Typography inverted tagName="span">{this.state.email}</Typography> }}
                                />
                            </Typography>
                            <Margin bottom={1} />
                            <Typography type="body" inverted align="center">
                                <Link className={classes.textGray} pseudo inverted onClick={this.handleStartOver}>
                                    <FormattedMessage
                                        id="form.anotherEmail"
                                        defaultMessage="Another email"
                                    />
                                </Link>
                            </Typography>
                        </div>
                    )}

                    {status === 'error' && (
                        <div>
                            <Typography type="quote" inverted align="center" className={classes.textGray}>
                                <FormattedMessage
                                    id="form.error"
                                    defaultMessage="Sorry, something went wrong..."
                                />
                            </Typography>
                            {!!onStartOver && (
                                <Typography type="body" inverted align="center">
                                    <Margin top={1} />
                                    <Link className={classes.textGray} pseudo inverted onClick={this.handleStartOver}>
                                        <FormattedMessage
                                            id="form.retry"
                                            defaultMessage="Try again"
                                        />
                                    </Link>
                                </Typography>
                            )}
                        </div>
                    )} */}
        </Form>
    )


FeedbackForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
}


export default compose(
    injectSheet(styles),
    injectIntl,
)(FeedbackForm);