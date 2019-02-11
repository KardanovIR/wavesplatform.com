import { connect } from 'react-redux';

import { submitResumeClick, vacanciesClick } from 'src/public/actions';

import View from './View';

export default connect(undefined, {
  onVacanciesClick: () =>
      vacanciesClick({ page: 'company', source: 'careers' }),
  onSubmitResumeClick: () =>
    submitResumeClick({ page: 'company', source: 'careers' }),
})(View);
