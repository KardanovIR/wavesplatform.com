import { connect } from 'react-redux';

import { changeAmount, changeTerm, amountBlur } from './ducks';

import View from './View';

const CalculatorRevenueContainer = connect(
  ({ calculatorRevenue, mrtWavesPrice }) => ({
    ...calculatorRevenue,
    mrtWavesPrice,
  }),
  (dispatch, { minWaves, maxWaves }) => ({
    onAmountChange: amount => dispatch(changeAmount({ amount })),
    onTermChange: v => dispatch(changeTerm(v)),
    onAmountBlur: amount => dispatch(amountBlur({ min: minWaves, max: maxWaves, amount })),
  })
)(View);

CalculatorRevenueContainer.defaultProps = {
  minWaves: 1,
  maxWaves: 100000000,
};

export default CalculatorRevenueContainer;
