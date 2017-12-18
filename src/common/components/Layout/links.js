import React from 'react';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

export const DESKTOP_LINKS = [
  {
    href: url('product'),
    page: 'product',
    text: <FormattedMessage id="nav.product" />,
  },
  {
    href: url('developers'),
    page: 'developers',
    text: <FormattedMessage id="nav.developers" />,
  },
  {
    href: url('company'),
    page: 'company',
    text: <FormattedMessage id="nav.company" />,
  },
  {
    href: url('get-waves'),
    text: <FormattedMessage id="nav.getWaves" />,
  },
  {
    href: url('blog'),
    text: <FormattedMessage id="nav.blog" />,
  },
];

export const MOBILE_LINKS = [
  {
    href: url('product'),
    page: 'product',
    text: <FormattedMessage id="nav.product" />,
    type: 'primary',
  },
  {
    href: url('developers'),
    page: 'developers',
    text: <FormattedMessage id="nav.developers" />,
    type: 'primary',
  },
  {
    href: url('company'),
    page: 'company',
    text: <FormattedMessage id="nav.company" />,
    type: 'primary',
  },
  // {
  //   href: url('leasing'),
  //   page: 'leasing',
  //   text: <FormattedMessage id="nav.leasing"  />,
  //   type: 'secondary'
  // },
  // {
  //   href: url('mining'),
  //   page: 'mining',
  //   text: <FormattedMessage id="nav.mining"  />,
  //   type: 'secondary'
  // },
  {
    href: url('get-waves'),
    text: <FormattedMessage id="nav.getWaves" />,
    type: 'secondary',
  },
  {
    href: url('blog'),
    text: <FormattedMessage id="nav.blog" />,
    type: 'secondary',
    hideInFooter: true,
  },
];
