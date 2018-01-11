import { cond, always, T } from 'ramda';
import calculateRewards from './lib/calculateRewards';

export const CHANGE_AMOUNT = 'ChangeAmount';
export const AMOUNT_BLUR = 'AmountBlur';
export const CHANGE_TERM = 'ChangeTerm';

export const changeAmount = newValue => ({
  type: CHANGE_AMOUNT,
  payload: newValue,
});
export const changeTerm = newValue => ({
  type: CHANGE_TERM,
  payload: newValue,
});
export const amountBlur = range => ({
  type: AMOUNT_BLUR,
  payload: range,
});

const initialState = {
  amount: 10000,
  term: '1m',
  ...calculateRewards(10000, '1m'),
};

const amountOrRangeBorder = ({ amount, min, max }) =>
  cond([
    [() => +amount < min, always(min)],
    [() => +amount > max, always(max)],
    [T, always(amount)],
  ])();

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AMOUNT: {
      const { amount } = action.payload;
      return {
        ...state,
        amount,
        ...calculateRewards(amount, state.term),
      };
    }
    case CHANGE_TERM: {
      return {
        ...state,
        term: action.payload,
        ...calculateRewards(state.amount, action.payload),
      };
    }
    case AMOUNT_BLUR: {
      const amount = amountOrRangeBorder(action.payload);

      return {
        ...state,
        amount,
        ...calculateRewards(amount, state.term),
      };
    }
    default: {
      return state;
    }
  }
};
