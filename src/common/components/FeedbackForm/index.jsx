import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
// import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
// import Link from 'src/common/components/Link';
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
        defaultMessage: 'Email address',
    },
    placeholderMessage: {
        id: 'form.placeholderMessage',
        defaultMessage: 'Message',
    },
})




class FeedbackForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onEmailChange: PropTypes.func.isRequired,
        onMessageChange: PropTypes.func.isRequired,
        onReasonChange: PropTypes.func.isRequired,
        onRetry: PropTypes.func,
        onStartOver: PropTypes.func,

        errors: PropTypes.object.isRequired,
        showErrors: PropTypes.bool,

        // status,
        // reasonsList: PropTypes.array.isRequired,

        // form data
        email: PropTypes.string.isRequired,
        reason: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }
    

    static defaultProps = {
        onSubmit: () => { },
        onEmailChange: () => { },
        onMessageChange: () => { },
        onReasonChange: () => { },
        onRetry: () => { },
        onStartOver: () => { },
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }


    handleEmailChange = e => this.props.onEmailChange(e.target.value);
    handleReasonChange = e => this.props.onReasonChange(e.target.value);
    handleMessageChange = e => this.props.onMessageChange(e.target.value);


    handleStartOver = e => {
        e.preventDefault();
        this.props.onStartOver();
    }

    render() {
        const {
            classes,
            errors,
            showErrors,
            status,

            // reasonsList,

            // form data
            email,
            reason,
            message,


            // onRetry,
            // onStartOver,
            intl
        } = this.props;

        const invalid = !!(showErrors && errors.email.length);

        return (
            <form onSubmit={this.handleSubmit}>
                <Row>
                    <Col xs={12} sm={6}>
                        <div className={classes.inputWrapper}>
                            <Input
                                className={classes.input}
                                type="text"
                                value={email}
                                onChange={this.handleEmailChange}
                                onBlur={this.props.onBlur}
                                placeholder={intl.formatMessage(messages.placeholderEmail)}
                                invalid={invalid}
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className={classes.inputWrapper}>
                            <select
                                // className={classes.input}
                                type="text"
                                value={reason}
                                onChange={this.handleReasonChange}
                                // invalid={invalid}
                            >
                                <option value="Reason1">Reason1</option>
                                <option value="Reason2">Reason2</option>
                                <option value="Reason3">Reason3</option>
                            </select>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div className={classes.inputWrapper}>
                            <Input
                                className={classes.input}
                                tagName="textarea"
                                value={message}
                                onChange={this.handleMessageChange}
                                onBlur={this.props.onBlur}
                                placeholder={intl.formatMessage(messages.placeholderEmail)}
                                invalid={invalid}
                            />
                        </div>
                    </Col>

                    <Col xs={12}>
                        <Button className={classes.button} loading={status === "pending"} type="submit" secondary disabled={invalid}>
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


                {showErrors && <ErrorMessage errors={errors.email} />}



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
            </form>

        )
    }
}


export default compose(
    injectSheet(styles),
    injectIntl
)(FeedbackForm);