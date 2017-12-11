import React from 'react';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

export const DESKTOP_LINKS = [
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

export const MOBILE_LINKS = [
  {
    href: url('product'),
    page: 'product',
    text: <FormattedMessage id="nav.product" defaultMessage="Product" />,
    type: 'primary'
  },
  {
    href: url('developers'),
    page: 'developers',
    text: <FormattedMessage id="nav.developers" defaultMessage="Developers" />,
    type: 'primary'
  },
  {
    href: url('company'),
    page: 'company',
    text: <FormattedMessage id="nav.company" defaultMessage="Company" />,
    type: 'primary'
  },
  {
    href: url('leasing'),
    page: 'leasing',
    text: <FormattedMessage id="nav.leasing" defaultMessage="Leasing" />,
    type: 'secondary'
  },
  {
    href: url('mining'),
    page: 'mining',
    text: <FormattedMessage id="nav.mining" defaultMessage="Mining" />,
    type: 'secondary'
  },
  {
    href: url('files.terms_conditions'),
    text: <FormattedMessage id="nav.terms" defaultMessage="Terms and conditions" />,
    type: 'primary',
    hideInMenu: true,
  },
  {
    href: url('home'),
    text: <FormattedMessage id="nav.signIn" defaultMessage="Sign in" />,
    type: 'secondary',
    hideInFooter: true
  },
];
