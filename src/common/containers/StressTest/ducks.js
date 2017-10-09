import { assoc } from 'ramda';

import createAC from 'src/public/utils/createAC';



export const UPDATE_CONFIRMED_TXS = "UpdateConfirmedTxs";
export const UPDATE_UNCONFIRMED_TXS = "UpdateUnconfirmedTxs";
export const START = "Start";
export const CANCEL = "Cancel";




export const start = createAC(START);
export const cancel = createAC(CANCEL);
export const updateConfirmedTxs = newValue => ({
    type: UPDATE_CONFIRMED_TXS,
    payload: newValue
});
export const updateUnconfirmedTxs = newValue => ({
    type: UPDATE_UNCONFIRMED_TXS,
    payload: newValue
});




const initialState = {
    status: "idle", // idle | testing | finished | ?
    utx: 0,
    confirmed: 0
}




export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONFIRMED_TXS: {
            return assoc('confirmed', action.payload, state)
        }
        case UPDATE_UNCONFIRMED_TXS: {
            return assoc('utx', action.payload, state)
        }
        case START: {
            return assoc('status', 'testing', state)
        }
        case CANCEL: {
            return assoc('status', 'cancelled', state)
        }
        default: {
            return state
        }
    }
}