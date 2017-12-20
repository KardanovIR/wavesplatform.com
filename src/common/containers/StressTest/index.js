import { connect } from 'react-redux';

import { start } from './ducks';

import View from './View';

const StressTestContainer = connect(({ stressTest }) => stressTest, {
  onTestStart: () => start(),
})(View);

export default StressTestContainer;
