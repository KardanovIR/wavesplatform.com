import React, { Component } from 'react';

import injectSheet from 'react-jss';
import styles from './styles';

import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import Icon from 'src/common/components/Icon';

import ErrorMessage from './lib/ErrorMessage';



class SubscriptionForm extends Component {
    static defaultProps = {
        onSubmit: () => { },
        onEmailChange: () => { },
        initialEmail: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.initialEmail
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange = e => {
        this.setState({
            email: e.target.value
        });
        this.props.onEmailChange(e.target.value);
    }

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
            onStartOver,
        } = this.props;

        const invalid = !!(showErrors && errors.email.length);

        return (
            <div className={classes.wrapper}>
                {status === 'idle' && (
                    <form onSubmit={this.handleSubmit}>
                        <div className={classes.inputs}>                           
                            <div className={classes.inputWrapper}>
                                <Input
                                    className={classes.input} 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    onBlur={this.props.onBlur}
                                    placeholder="Email"
                                    invalid={invalid}
                                />
                            </div>

                            <div className={classes.buttonWrapper}>
                                <Button className={classes.button} loading={status==="pending"} type="submit" secondary disabled={invalid}>
                                    <span className={classes.buttonFull}>Submit</span>
                                    <span className={classes.buttonIcon}><Icon name="send" size={26} /></span>
                                </Button>
                            </div>
                        </div>

                        {showErrors && <ErrorMessage errors={errors.email} />}

                    </form>
                )}

                {status === 'subscribed' && (
                    <div>
                        <div>Спасибо за подписку!</div>
                        <div>Скоро вы вышлем вам первое письмо на {this.state.email}</div>
                        <br />
                        {!!onStartOver && (
                            <a href="#" onClick={this.handleStartOver}>Подписаться на другой адрес</a>
                        )}
                    </div>
                )}

                {status === 'error' && (
                    <div>
                        <div>Кажется, что-то пошло не так...</div>
                        <br />
                        {!!onStartOver && (
                            <a href="#" onClick={this.handleStartOver}>Попробовать ещё раз</a>
                        )}
                    </div>
                )}

                {/* <br /> */}
                {/* <br /> */}
                {/* Current status: {status} */}
            </div>

        )
    }
}


export default injectSheet(styles)(SubscriptionForm);