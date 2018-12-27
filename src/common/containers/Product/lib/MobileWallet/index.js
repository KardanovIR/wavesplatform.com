import { connect } from 'react-redux';

import { androidClientClick, iosClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onAndroidClientClick: (source = 'mobile_client') =>
    androidClientClick({ page: 'product', source }),
  onIosClientClick: (source = 'mobile_client') =>
    iosClientClick({ page: 'product', source }),
})(View);
