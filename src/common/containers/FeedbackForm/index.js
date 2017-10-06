import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'ramda';

import { sendForm } from './actions';

import View from './View';
import validate from './validate';




const FeedbackFormContainer = compose(
    connect(
        ({ feedbackForm }) => feedbackForm,
        (dispatch, ownProps) => ({
            onSubmit: (formData) => {
                dispatch(sendForm(formData));
                ownProps.onSubmit(formData);
            }
        })
    ),
    reduxForm({
        form: 'feedbackForm',
        validate
    }),
)(View);


FeedbackFormContainer.defaultProps = {
    onSubmit: () => {}
}


export default FeedbackFormContainer;