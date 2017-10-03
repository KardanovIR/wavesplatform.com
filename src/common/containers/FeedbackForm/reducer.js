import {
    SUBMIT,
    SUCCESS,
    ERROR
} from './actions';




const inisialState = {
    status: 'idle',
}




export default (state = inisialState, { type }) => {
    switch (type) {
        case SUBMIT:
            return {
                ...state,
                status: 'pending'
            };
        case SUCCESS:
            return {
                ...state,
                status: 'success'
            };
        case ERROR:
            return {
                ...state,
                status: 'error'
            };
        default:
            return state;
    }
}