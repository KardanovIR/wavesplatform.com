import React, { Component } from 'react';
// import styles from './styles';




class SubscriptionForm extends Component {
    static defaultProps = {
        onSubmit: () => {},
        onEmailChange: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            email: ''
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

    render() {
        const {
            errors,
            showErrors
        } = this.props;


        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <br/>
                { showErrors && !!errors.email.length && 'Неверно введён email' }
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default SubscriptionForm;