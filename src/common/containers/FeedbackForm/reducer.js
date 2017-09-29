import {
    EMAIL_CHANGE,
    REASON_CHANGE,
    MESSAGE_CHANGE,
    // SUBMIT,
    VALIDATE,
    SHOW_ERRORS,

} from './actions';



const inisialState = {
    email: '',
    reason: '',
    message: '',

    showErrors: false,
    errors: {
        email: [],
        reason: [],
        message: [],
    }
}



export default (state = inisialState, { type, payload }) => {
    switch (type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: payload
            };
        case REASON_CHANGE:
            return {
                ...state,
                reason: payload
            };
        case MESSAGE_CHANGE:
            return {
                ...state,
                message: payload
            };
        case VALIDATE:
            return {
                ...state,
                errors: {
                    email: [],
                    reason: [],
                    message: []
                }
            }
        case SHOW_ERRORS:
            return {
                ...state,
                showErrors: true
            }
        default:
            return state;
    }
}