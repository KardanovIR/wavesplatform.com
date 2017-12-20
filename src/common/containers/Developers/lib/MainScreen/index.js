import { connect } from 'react-redux';

import { apiDocumentationClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onDocumentationClick: () =>
    apiDocumentationClick({ page: 'developers', source: 'main_screen' }),
})(View);
