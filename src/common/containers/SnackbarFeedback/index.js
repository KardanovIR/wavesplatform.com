import { connect } from 'react-redux';

import {
  giveFeedbackClick,
  giveFeedbackClose,
  giveFeedbackShow,
} from 'src/public/actions';

import View from 'src/common/components/SnackbarFeedback';

export default connect(s => s, {
  onGiveFeedbackClick: () => giveFeedbackClick({ page: 'all' }),
  onGiveFeedbackClose: () => giveFeedbackClose({ page: 'all' }),
  onGiveFeedbackShow: () => giveFeedbackShow({ page: 'all' }),
})(View);
