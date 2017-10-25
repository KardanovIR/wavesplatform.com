import { connect } from 'react-redux';

import { submitResumeClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onSubmitResumeClick: () => submitResumeClick({ page: 'company', source: 'careers' }),
})(View);