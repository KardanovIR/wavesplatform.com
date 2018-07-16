import React from 'react';
import injectSheet from 'react-jss';

import { fileUrl, FILES } from 'src/common/utils/url';

import Checkbox from 'src/common/components/Checkbox';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const FormFieldConsentStyles = theme => ({
  checkbox: { marginRight: theme.spacing.unit },
});
const FormFieldConsent = injectSheet(FormFieldConsentStyles)(
  ({
    inverted,
    cookiesConsent,
    newsConsent,
    invalid,
    onCookiesChange,
    onNewsChange,
    classes,
  }) => (
    <div>
      <label>
        <Typography type="quote" inverted={inverted}>
          <Checkbox
            value={cookiesConsent}
            onChange={onCookiesChange}
            invalid={invalid}
            className={classes.checkbox}
          />
          <FormattedMessage
            id="form.consent.privacyAndCookies"
            values={{
              privacyLink: <PrivacyPolicyLink />,
              cookiesLink: <CookiesPolicyLink />,
            }}
            defaultMessage="I have read and agree with the {privacyLink} and the {cookiesLink}"
          />
        </Typography>
      </label>
      <Margin xsOnly />
      <label>
        <Typography type="quote" inverted={inverted}>
          <Checkbox
            value={newsConsent}
            onChange={onNewsChange}
            invalid={invalid}
            className={classes.checkbox}
          />
          <FormattedHTMLMessage
            id="form.consent.marketingAndNewsletter"
            defaultMessage="I&nbsp;agree to&nbsp;receive marketing information and newsletters from Waves by&nbsp;email"
          />
        </Typography>
      </label>
    </div>
  )
);

const PrivacyPolicyLink = () => (
  <Link href={fileUrl(FILES.privacy_policy)} textDecoration={false} secondary>
    <FormattedMessage
      id="form.consent.privacy"
      defaultMessage="Privacy policy"
    />
  </Link>
);

const CookiesPolicyLink = () => (
  <Link href={fileUrl(FILES.cookies_policy)} textDecoration={false} secondary>
    <FormattedMessage
      id="form.consent.cookies"
      defaultMessage="Cookies policy"
    />
  </Link>
);

export default FormFieldConsent;
