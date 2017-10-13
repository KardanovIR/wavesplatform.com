import { assoc } from 'ramda';

import createAC from 'src/public/utils/createAC';



export const UPDATE_CONFIRMED_TXS = "UpdateConfirmedTxs";
export const UPDATE_UNCONFIRMED_TXS = "UpdateUnconfirmedTxs";
export const START = "Start";
export const FINISH = "Finish";
export const ERROR = "Error";
export const UPDATE_TIME = "UpdateTime";




export const start = () => ({ type: START });
export const finish = () => ({ type: FINISH });
export const updateTime = () => ({ type: UPDATE_TIME });
export const error = severity => ({ type: ERROR, payload: severity });


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
    totalTime: 0,
    status: "idle", // idle | loading | testing | finished | error | error_fatal
    total: 0,
    unconfirmed: 0,
    confirmed: 0,
    speed: 0
}




export default (state = initialState, action) => {
    switch (action.type) {
        case START: {
            return {
                ...initialState,
                startTimestamp: Date.now(),
                status: 'loading'
            }
        }
        case UPDATE_UNCONFIRMED_TXS: {
            return {
                ...state,
                total: action.payload,
                status: 'testing'
            }
        }
        case ERROR: {
            return {
                ...state,
                status: action.payload === 'fatal' ? 'error_fatal' : 'error'
            }
        }
        case UPDATE_CONFIRMED_TXS: {
            return {
                ...state,
                confirmed: action.payload,
                unconfirmed: state.total - action.payload,
                status: state.total === action.payload ? 'finished' : 'tesing'
            }
        }
        case UPDATE_TIME: {
            return {
                ...state,
                totalTime: Date.now() - state.startTimestamp,
            }
        }
        case FINISH: {
            return {
                ...state,
                speed: state.total * 1000 / (Date.now() - state.startTimestamp),
                staus: 'finished'
            }
        }
        default: {
            return state
        }
    }
}