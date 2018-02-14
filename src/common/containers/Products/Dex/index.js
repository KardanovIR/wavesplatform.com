import { connect } from 'react-redux';

import App from './View.jsx';
import { downloadClientChange } from 'src/common/containers/DownloadClientDropdown/lib/actions';

const logSettings = { page: 'ProductDex', source: 'HowToToken' };

export default connect(undefined, {
  onDropdownChange: downloadClientChange(logSettings),
})(App);
