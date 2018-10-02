import React from 'react';
import Link from 'src/common/components/Link';
import { FormattedMessage } from 'react-intl';

const Buttons = ({ classes, onAllowClick, onEssentialsOnlyClick }) => (
  <div className={classes.rightColumn}>
    <Link
      inverted
      className={classes.disallowLink}
      onClick={onEssentialsOnlyClick}
    >
      <FormattedMessage id="cookieConsent.disable" defaultMessage="DISABLE" />
    </Link>
    <Link inverted className={classes.allowAllLink} onClick={onAllowClick}>
      <FormattedMessage id="cookieConsent.allow" defaultMessage="ALLOW ALL" />
    </Link>
  </div>
);

export default Buttons;
