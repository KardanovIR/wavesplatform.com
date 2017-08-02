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

            <link rel="stylesheet" href="styles.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300" />
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