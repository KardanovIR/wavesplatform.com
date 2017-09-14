import React from 'react';

import { FormattedMessage } from 'react-intl';


export default [
    {
        "href": "/",
        "page": "home",
        "text": (
            <FormattedMessage
                id="nav.home"
                defaultMessage="Home"
            />
        )
    },
    {
        "href": "/product",
        "page": "product",
        "text": (
            <FormattedMessage
                id="nav.product"
                defaultMessage="Product"
            />
        )
    },
    {
        "href": "/developers",
        "page": "developers",
        "text": (
            <FormattedMessage
                id="nav.developers"
                defaultMessage="Developers"
            />
        )
    },
    {
        "href": "/company",
        "page": "company",
        "text": (
            <FormattedMessage
                id="nav.company"
                defaultMessage="Company"
            />
        )
    }
]