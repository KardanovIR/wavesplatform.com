import React, { Component } from 'react';
import PropTypes from 'prop-types';

// redux-form
import { Form, Field, reduxForm } from 'redux-form';
import renderInput from './renderInput';


// components
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Icon from 'src/common/components/Icon';
// import Typography from 'src/common/components/Typography';
// import Margin from 'src/common/components/Margin';
// import Link from 'src/common/components/Link';
// import Input from 'src/common/components/Input';


// error message
import validate from './validate';
// import ErrorMessage from './lib/ErrorMessage';


import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';


import { compose } from 'ramda';




const messages = defineMessages({
    placeholderEmail: {
        id: 'form.placeholderEmail',
        defaultMessage: 'Email address',
    },
    placeholderMessage: {
        id: 'form.placeholderMessage',
        defaultMessage: 'Message',
    },
})




class FeedbackForm extends Component {
    static propTypes = {
        // onSubmit: PropTypes.func.isRequired,
        // onEmailChange: PropTypes.func.isRequired,
        // onMessageChange: PropTypes.func.isRequired,
        // onReasonChange: PropTypes.func.isRequired,
        // onRetry: PropTypes.func,
        // onStartOver: PropTypes.func,

        // onBlur

        // errors: PropTypes.object.isRequired,
        // showErrors: PropTypes.bool,

        // status,
        // reasonsList: PropTypes.array.isRequired,

        // form data
        // email: PropTypes.string.isRequired,
        // reason: PropTypes.string.isRequired,
        // message: PropTypes.string.isRequired,
    }


    // static defaultProps = {
    //     onSubmit: () => { },
    //     onEmailChange: () => { },
    //     onMessageChange: () => { },
    //     onReasonChange: () => { },
    //     onRetry: () => { },
    //     onStartOver: () => { },
    // }

    // handleStartOver = e => {
    //     e.preventDefault();
    //     this.props.onStartOver();
    // }

    render() {
        const {
            classes,
            // errors,
            // showErrors,
            // status,

            // reasonsList,

            // // form data
            // email,
            // reason,
            // message,


            // onRetry,
            // onStartOver,
            anyTouched,
            submitting,
            invalid,
            handleSubmit,
            intl
        } = this.props;

        return (
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
                            <Field name="reason" component="select">
                                <option value="Reason1">Reason1</option>
                                <option value="Reason2">Reason2</option>
                                <option value="Reason3">Reason3</option>
                            </Field>
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
    }
}


export default compose(
    reduxForm({
        form: 'feedbackForm',
        validate
    }),
    injectSheet(styles),
    injectIntl,
)(FeedbackForm);