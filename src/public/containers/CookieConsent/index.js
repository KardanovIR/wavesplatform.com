import { connect } from 'react-redux';

import { mount, allowAll, essentialsOnly } from './actions';
import { cookiesAllowClick, cookiesDisableClick } from 'src/public/actions';

import Snackbar from './Snackbar';

export { default as reducer } from './reducer';
export { default as epic } from './epic';

export default connect(
  s => ({ open: s.cookieConsent.open }),
  d => ({
    onMount: () => d(mount()),
    onAllowClick: () => {
      d(cookiesAllowClick());
      d(allowAll());
    },
    onDisableClick: () => {
      d(cookiesDisableClick());
      d(essentialsOnly());
    },
  })
)(Snackbar);
