import React from 'react';
import injectSheet from 'react-jss';

import { fileUrl } from 'src/common/utils/url';

import Checkbox from 'src/common/components/Checkbox';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import { FormattedMessage } from 'react-intl';

const FormFieldConsentStyles = theme => ({
  checkbox: { marginRight: theme.spacing.unit },
});
const FormFieldConsent = injectSheet(FormFieldConsentStyles)(
  ({
    inverted,
    agreeCookies,
    agreeNews,
    invalid,
    onCookiesChange,
    onNewsChange,
    classes,
  }) => (
    <div>
      <label>
        <Typography type="quote" inverted={inverted}>
          <Checkbox
            value={agreeCookies}
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
            defaultMessage="I have read and agree with the {privacyLink} and the {cookiesLink}"
          />
        </Typography>
      </label>
      <Margin xsOnly />
      <label>
        <Typography type="quote" inverted={inverted}>
          <Checkbox
            value={agreeNews}
            onChange={onNewsChange}
            invalid={invalid}
            className={classes.checkbox}
          />
          I agree to receive marketing information and newsletters from Waves by
          email
        </Typography>
      </label>
    </div>
  )
);

const PrivacyPolicyLink = () => (
  <Link
    href={fileUrl('docs/Waves_privacy_policy.pdf')}
    textDecoration={false}
    secondary
  >
    <FormattedMessage
      id="form.consent.privacy"
      defaultMessage="Privacy policy"
    />
  </Link>
);

const CookiesPolicyLink = () => (
  <Link
    href={fileUrl('docs/Waves_сookies_policy.pdf')}
    textDecoration={false}
    secondary
  >
    <FormattedMessage
      id="form.consent.cookies"
      defaultMessage="Cookies policy"
    />
  </Link>
);

export default FormFieldConsent;
