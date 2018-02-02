import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';
import { downloadClientChange } from 'src/common/components/DownloadClientDropdown/lib/handlers';

import View from './View';

const logSettings = { page: 'WavesNg', source: 'MainScreen' };

export default connect(undefined, {
  onNewClientClick: () => newClientClick(logSettings),
  onDownloadChange: downloadClientChange(logSettings),
})(View);
