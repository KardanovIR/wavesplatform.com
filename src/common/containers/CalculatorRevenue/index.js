import { connect } from 'react-redux';

import { changeAmount, changeTerm } from './ducks';

import View from './View';

const CalculatorRevenueContainer = connect(
    ({ calculatorRevenue }) => calculatorRevenue,
    {
        onAmountChange: changeAmount,
        onTermChange: changeTerm,
    }
)(View);

export default CalculatorRevenueContainer;
