import { connect } from 'react-redux';

import View from './View.jsx';
import {
  androidClientClick,
  iosClientClick,
  newDexClick,
} from 'src/public/actions';

const logSettings = {
  MainScreen: {
    page: 'ProductDex',
    source: 'MainScreen',
  },
  MobileApp: { page: 'ProductDex', source: 'MobileApp' },
};

export default connect(
  undefined,
  {
    onNewDexClick: () => newDexClick(logSettings.MainScreen),
    onAndroidClientClick: () => androidClientClick(logSettings.MobileApp),
    onIosClientClick: () => iosClientClick(logSettings.MobileApp),
  }
)(View);
