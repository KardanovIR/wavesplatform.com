import { connect } from 'react-redux';

import { androidClientClick, iosClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onAndroidClientClick: () =>
    androidClientClick({ page: 'product', source: 'mobile_client' }),
  onIosClientClick: () =>
    iosClientClick({ page: 'product', source: 'mobile_client' }),
})(View);
