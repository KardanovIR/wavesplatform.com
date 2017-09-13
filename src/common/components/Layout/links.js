import React from 'react';

import { FormattedMessage } from 'react-intl';


export default [
    {
        "href": "/",
        "text": (
            <FormattedMessage
                id="nav.home"
                defaultMessage="Home"
            />
        )
    },
    {
        "href": "/product",
        "text": (
            <FormattedMessage
                id="nav.product"
                defaultMessage="Product"
            />
        )
    },
    {
        "href": "/developers",
        "text": (
            <FormattedMessage
                id="nav.developers"
                defaultMessage="Developers"
            />
        )
    },
    {
        "href": "/company",
        "text": (
            <FormattedMessage
                id="nav.company"
                defaultMessage="Company"
            />
        )
    }
]