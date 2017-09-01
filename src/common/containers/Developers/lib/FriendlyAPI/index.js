import { connect } from 'react-redux';

import { apiDocumentationClick, apiClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onDocumentationClick: () => apiDocumentationClick({ page: 'developers', source: 'frindly_api' }),
    onClientClick: () => apiClientClick({ page: 'developers', source: 'frindly_api' }),
})(View);