import { assoc } from 'ramda';

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
    total: 0,
    waves: 0,
    mrt: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AMOUNT: {
            return assoc('amount', action.payload, state);
        }
        case CHANGE_TERM: {
            return assoc('term', action.payload, state);
        }
        default: {
            return state;
        }
    }
};
