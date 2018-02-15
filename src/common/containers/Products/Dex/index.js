import { connect } from 'react-redux';

import App from './View.jsx';
import { downloadClientChange } from 'src/common/containers/DownloadClientDropdown/lib/actions';
import {
  androidClientClick,
  iosClientClick,
  newClientClick,
} from 'src/public/actions';

const logSettings = {
  MainScreen: {
    page: 'ProductDex',
    source: 'MainScreen',
  },
  MobileApp: { page: 'ProductDex', source: 'MobileApp' },
};
export default connect(undefined, {
  onDownloadClient: downloadClientChange({
    page: 'ProductDex',
    source: 'MainScreen',
  }),
  onOnlineClientClick: () => newClientClick(logSettings.MainScreen),

  onAndroidClientClick: () => androidClientClick(logSettings.MobileApp),
  onIosClientClick: () => iosClientClick(logSettings.MobileApp),
})(App);
