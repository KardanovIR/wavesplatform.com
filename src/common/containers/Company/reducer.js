import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import feedbackForm from '../FeedbackForm/reducer'



export default combineReducers({
    feedbackForm,
    form: formReducer
})