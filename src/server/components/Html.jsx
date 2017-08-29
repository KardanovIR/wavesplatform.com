import React from 'react';

import { GtmHead, GtmBody } from './Gtm';



const Html = ({
    title,
    content,
    initialState,
    script,
    vendorChunk,
    style,
    
    gtmEnabled,
    sentryEnabled,
}) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{ title }</title>

            {/* sentry enable */}
            { sentryEnabled && (
                <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" crossOrigin="anonymous" />
            ) }
            { sentryEnabled && (
                <script dangerouslySetInnerHTML={{ __html: `
                    Raven.config('https://a453204a9f9846feb4855ab716dc2e9f@sentry.io/198370').install();
                `}} />
            ) }

            {/* GTM enable */}
            { gtmEnabled && <GtmHead /> }

            {/* Page initial state */}
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{ __html: `
                    window.__INITIAL_STATE = ${JSON.stringify(initialState)}
                ` }}
            />

            {/* Page styles */}
            <style type="text/css" data-jss-server>
                { style }
            </style>
        </head>
        <body>
            {/* GTM enable */}
            { gtmEnabled && <GtmBody /> }

            <div style={{ opacity: ".4" }} id="app" dangerouslySetInnerHTML={{ __html: content }} />
            { vendorChunk && <script type="text/javascript" src={vendorChunk} /> }
            <script type="text/javascript" src={script} />

        </body>
    </html>
)


Html.defaultProps = {
    initialState: {},
    gtmEnabled: false,
    sentryEnabled: false,
}


export default Html;