import React from 'react';


const Html = ({
    title,
    content,
    preloadedState,
    script,
    style
}) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{ title }</title>

            {/* sentry enable */}
            {/* <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" crossOrigin="anonymous" />
            <script dangerouslySetInnerHTML={{ __html: `
                Raven.config('https://a453204a9f9846feb4855ab716dc2e9f@sentry.io/198370').install();
            `}} /> */}

            {/* <link rel="stylesheet" href="styles.css" /> */}

            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{ __html: `
                    window.__PRELOADED_STATE = ${JSON.stringify(preloadedState)}
                ` }}
            />

            <style type="text/css" data-jss-server>
                { style }
            </style>
        </head>
        <body>
            <div style={{ opacity: ".4" }} id="app" dangerouslySetInnerHTML={{ __html: content }} />
            <script type="text/javascript" src={`${script}.js`} />
        </body>
    </html>
)


Html.defaultProps = {
    preloadedState: {}
}


export default Html;