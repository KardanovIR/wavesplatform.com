import { combineReducers } from 'redux';
import calculatorRevenue from 'src/common/containers/CalculatorRevenue/ducks';

export default combineReducers({
  calculatorRevenue,
  wavesTopNodes: (a = null) => a,
  mrtWavesPrice: (a = null) => a,
});
