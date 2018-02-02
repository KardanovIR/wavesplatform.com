import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';
import { downloadClientChange } from 'src/common/components/DownloadClientDropdown/lib/handlers';

import View from './View';

const logSettings = { page: 'GetWaves', source: 'MainScreen' };

export default connect(undefined, {
  onNewClientClick: () => newClientClick(logSettings),
  onDropdownChange: downloadClientChange(logSettings)
})(View);
