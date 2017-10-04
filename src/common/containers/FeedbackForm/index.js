import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'ramda';

import { sendForm } from './actions';

import View from './View';
import validate from './validate';



export default compose(
    connect(
        ({ feedbackForm }) => feedbackForm,
        {
            onSubmit: sendForm
        }
    ),
    reduxForm({
        form: 'feedbackForm',
        validate
    }),
)(View);