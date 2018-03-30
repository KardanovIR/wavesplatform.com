import { connect } from 'react-redux';

import View from './View.jsx';
// import {} from 'src/public/actions';

export default connect(undefined, {
  onDocumentationClick: () => {}, //TODO: add analytics
})(View);
