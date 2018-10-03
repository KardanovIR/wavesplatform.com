import { combineReducers } from 'redux';
import calculatorRevenue from 'src/common/containers/CalculatorRevenue/ducks';

export default combineReducers({
  calculatorRevenue,
  mrtWavesPrice: (a = null) => a,
});
