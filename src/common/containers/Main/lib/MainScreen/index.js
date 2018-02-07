import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';
import { downloadClientChange } from 'src/common/containers/DownloadClientDropdown/lib/actions';

import View from './View';

const logSettings = { page: 'Home', source: 'MainScreen' };

export default connect(undefined, {
  onNewClientClick: () => newClientClick(logSettings),
  onDownloadChange: downloadClientChange(logSettings),
})(View);
