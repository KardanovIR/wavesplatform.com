import { assoc } from 'ramda';

import createAC from 'src/public/utils/createAC';
import moment from 'moment';



export const UPDATE_CONFIRMED_TXS = "UpdateConfirmedTxs";
export const UPDATE_UNCONFIRMED_TXS = "UpdateUnconfirmedTxs";
export const START = "Start";
export const FINISH = "Finish";
export const UPDATE_TIME = "UpdateTime";




export const start = createAC(START);
export const finish = createAC(FINISH);
export const updateTime = createAC(UPDATE_TIME);

export const updateConfirmedTxs = newValue => ({
    type: UPDATE_CONFIRMED_TXS,
    payload: newValue
});
export const updateUnconfirmedTxs = newValue => ({
    type: UPDATE_UNCONFIRMED_TXS,
    payload: newValue
});




const initialState = {
    startTime: null,
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
            return {
                ...state,
                startTimestamp: Date.now(),
                status: 'testing'
            }
        }
        case UPDATE_TIME: {
            return {
                ...state,
                totalTime: Date.now() - state.startTimestamp,
            }
        }
        case CANCEL: {
            return assoc('status', 'cancelled', state)
        }
        default: {
            return state
        }
    }
}