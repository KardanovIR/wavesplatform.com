import { connect } from 'react-redux';

import { changeAmount, changeTerm, amountBlur } from './ducks';

import View from './View';

const CalculatorRevenueContainer = connect(
  ({ calculatorRevenue, mrtWavesPrice }) => ({
    ...calculatorRevenue,
    mrtWavesPrice,
  }),
  (dispatch, { minWaves, maxWaves }) => ({
    onAmountChange: value => { dispatch(changeAmount({ value, min: minWaves, max: maxWaves })); },
    onTermChange: v => dispatch(changeTerm(v)),
    onAmountBlur: () => dispatch(amountBlur({ min: minWaves, max: maxWaves })),
  })
)(View);

CalculatorRevenueContainer.defaultProps = {
  minWaves: 1,
  maxWaves: 100000000,
};

export default CalculatorRevenueContainer;
