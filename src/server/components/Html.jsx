import React from 'react';

import { GtmHead, GtmBody } from './Gtm';



const Html = ({
    title,
    description,
    locale,     // i18n
    messages,   // locale
    content,
    initialState,
    script,
    vendorChunk,
    style,
    fonts,
    gtmEnabled,
    sentryEnabled,
    serverName
}) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />

            <title>{ title }</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://s3.ca-central-1.amazonaws.com/wavesdb.com/images/OGimage.png" />


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
                    window.__INITIAL_STATE = ${JSON.stringify(initialState)};
                    window.__SERVER_NAME = ${JSON.stringify(serverName)};
                ` }}
            />

            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{ __html: `
                    window.__MESSAGES = ${JSON.stringify(messages)};
                    window.__LOCALE = ${JSON.stringify(locale)}
                ` }}
            />

            {/* Page fonts */}
            <style type="text/css" dangerouslySetInnerHTML={{ __html: fonts }} />

            {/* Page styles */}
            <style type="text/css" data-jss-server dangerouslySetInnerHTML={{ __html: style }} />
        </head>
        <body>
            {/* GTM enable */}
            { gtmEnabled && <GtmBody /> }

            <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
            { vendorChunk && <script type="text/javascript" src={vendorChunk} /> }
            <script type="text/javascript" src={script} />

        </body>
    </html>
)


Html.defaultProps = {
    initialState: {},
    messages: {},
    gtmEnabled: false,
    sentryEnabled: false,
    description: '',
    locale: 'en'
}


export default Html;