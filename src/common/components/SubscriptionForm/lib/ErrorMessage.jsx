import React from 'react';

import Typography from 'src/common/components/Typography';

import { FormattedMessage } from 'react-intl';

import { EMPTY, EMAIL_INVALID } from 'src/public/utils/validation/rules';

const Empty = () => (
  <Typography inverted>
    <FormattedMessage id="form.errors.emailEmpty" />
  </Typography>
);
const EmailInvalid = () => (
  <Typography inverted>
    <FormattedMessage id="form.errors.emailInvalid" />
  </Typography>
);

const ErrorMessage = ({ errors }) => {
  if (~errors.indexOf(EMPTY)) {
    return <Empty />;
  }

  if (~errors.indexOf(EMAIL_INVALID)) {
    return <EmailInvalid />;
  }

  return null;
};

export default ErrorMessage;
