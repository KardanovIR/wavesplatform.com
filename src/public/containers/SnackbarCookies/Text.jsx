import React from 'react';
import Link from 'src/common/components/Link';
import { FormattedMessage } from 'react-intl';
import { fileUrl, FILES } from 'src/common/utils/url';
import Typography from 'src/common/components/Typography';

const Text = ({ classes }) => (
  <Typography inverted className={classes.text}>
    <FormattedMessage
      id="cookieConsent.text"
      defaultMessage="According to our {policy}, this website uses 🍪cookies to improve functionality and performance. Some cookies are essential for the operation of the website, you can turn them off only via browser settings. Other cookies can be disabled by this tool."
      values={{
        policy: (
          <Link
            inverted
            noIcon
            className={classes.policyLink}
            target="_blank"
            href={fileUrl(FILES.cookies_policy)}
          >
            Policy
          </Link>
        ),
      }}
    />
  </Typography>
);

export default Text;
