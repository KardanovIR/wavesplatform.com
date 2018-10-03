import { connect } from 'react-redux';
import { cookiesResetClick } from 'src/public/actions';

import Footer from 'src/common/components/Footer';

export default connect(
  undefined,
  { onCookieConsentReset: () => cookiesResetClick() }
)(Footer);
