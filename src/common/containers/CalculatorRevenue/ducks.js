import calculateRewards from './lib/calculateRewards';

export const CHANGE_AMOUNT = 'ChangeAmount';
export const CHANGE_TERM = 'ChangeTerm';

export const changeAmount = newValue => ({
    type: CHANGE_AMOUNT,
    payload: newValue,
});
export const changeTerm = newValue => ({
    type: CHANGE_TERM,
    payload: newValue,
});

const initialState = {
    amount: 10000,
    term: '1m',
    ...calculateRewards(10000, '1m')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AMOUNT: {
            return {
                ...state,
                amount: action.payload,
                ...calculateRewards(action.payload, state.term)
            }
        }
        case CHANGE_TERM: {
            return {
                ...state,
                term: action.payload,
                ...calculateRewards(state.amount, action.payload)
            }
        }
        default: {
            return state;
        }
    }
};
