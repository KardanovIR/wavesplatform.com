import React, { Component } from 'react';
// import styles from './styles';




class SubscriptionForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted', this.state);
    }

    handleChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default SubscriptionForm;