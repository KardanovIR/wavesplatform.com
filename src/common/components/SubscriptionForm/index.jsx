import React, { Component } from 'react';
import styles from './styles';

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

    handleAnotherEmailClick = e => {
        e.preventDefault();
        this.props.onAnotherEmailClick();
    }

    render() {
        const {
            errors,
            showErrors,
            status,
            onAnotherEmailClick
        } = this.props;

        return (
            <div className={styles.wrapper}>
                <b>Подписка на рассылку</b>
                <br />
                <br />

                {status === 'idle' && (
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                            onBlur={this.props.onBlur}
                            placeholder="email@domain.com"
                        />
                        <br />
                         {showErrors && <ErrorMessage errors={errors.email} />} 
                        <br />
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                )}

                {status === 'subscribed' && (
                    <div>
                        <div>Спасибо за подписку!</div>
                        <div>Скоро вы вышлем вам первое письмо на {this.state.email}</div>
                        <br/>
                        {!!onAnotherEmailClick && (
                            <a href="#" onClick={this.handleAnotherEmailClick}>Подписаться на другой адрес</a>
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


export default SubscriptionForm;