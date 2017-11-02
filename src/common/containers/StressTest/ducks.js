export const UPDATE_CONFIRMED_TXS = 'UpdateConfirmedTxs';
export const UPDATE_UNCONFIRMED_TXS = 'UpdateUnconfirmedTxs';
export const CONNECT = 'Connect';
export const START = 'Start';
export const FINISH = 'Finish';
export const ERROR = 'Error';
export const UPDATE_TIME = 'UpdateTime';

export const connect = () => ({ type: CONNECT });
export const start = () => ({ type: START });
export const finish = () => ({ type: FINISH });
export const updateTime = () => ({ type: UPDATE_TIME });
export const error = severity => ({ type: ERROR, payload: severity });

export const updateConfirmedTxs = newValue => ({
    type: UPDATE_CONFIRMED_TXS,
    payload: newValue,
});
export const updateUnconfirmedTxs = newValue => ({
    type: UPDATE_UNCONFIRMED_TXS,
    payload: newValue,
});

const initialState = {
    startTime: null,
    totalTime: 0,
    status: 'connecting', // idle | loading | testing | finished | error | error_fatal
    total: 0,
    unconfirmed: 0,
    confirmed: 0,
    speed: 0,
    targetWalletAddress: ''
};


export default (state = initialState, action) => {
    switch (action.type) {
        case CONNECT: {
            return {
                ...state,
                status: 'idle',
            };
        }
        case START: {
            return {
                ...initialState,
                status: 'loading',
            };
        }
        case UPDATE_UNCONFIRMED_TXS: {
            return {
                ...state,
                startTimestamp: Date.now(),
                total: action.payload.tsx,
                unconfirmed: action.payload.tsx,
                status: 'testing',
                targetWalletAddress: action.payload.targetWalletAddress
            };
        }
        case ERROR: {
            return {
                ...state,
                status: action.payload === 'fatal' ? 'error_fatal' : 'error',
            };
        }
        case UPDATE_CONFIRMED_TXS: {
            return {
                ...state,
                confirmed: action.payload,
                unconfirmed: state.total - action.payload,
            };
        }
        case UPDATE_TIME: {
            return {
                ...state,
                totalTime: Date.now() - state.startTimestamp,
            };
        }
        case FINISH: {
            const totalTime = Date.now() - state.startTimestamp;
            return {
                ...state,
                totalTime,
                speed: state.total * 1000 / totalTime,
                status: 'finished',
            };
        }
        default: {
            return state;
        }
    }
};
