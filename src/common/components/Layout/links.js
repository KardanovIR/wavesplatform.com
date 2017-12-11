import React from 'react';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

export default [
  {
    href: url('product'),
    page: 'product',
    text: <FormattedMessage id="nav.product" defaultMessage="Product" />,
  },
  {
    href: url('developers'),
    page: 'developers',
    text: <FormattedMessage id="nav.developers" defaultMessage="Developers" />,
  },
  {
    href: url('company'),
    page: 'company',
    text: <FormattedMessage id="nav.company" defaultMessage="Company" />,
  },
  {
    href: url('home'),
    text: <FormattedMessage id="nav.signIn" defaultMessage="Sign in" />,
  },
];
