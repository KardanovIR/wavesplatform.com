import { connect } from 'react-redux';

import { feedbackFormSubmit } from 'src/public/actions';

import View from './View';

export default connect(undefined, {
  onFeedbackFormSubmit: () =>
    feedbackFormSubmit({ page: 'company', source: 'feedbackForm' }),
})(View);
