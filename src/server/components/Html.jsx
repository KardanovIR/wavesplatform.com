import React from 'react';


const Html = ({ children, preloadedState, script }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Framework server render</title>

            <link rel="stylesheet" href="styles.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300" />
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{ __html: `
                    window.__PRELOADED_STATE = ${JSON.stringify(preloadedState)}
                ` }}
            />
        </head>
        <body>
            <div style={{opacity: ".4"}} id="app">
                { children }
            </div>
            <script type="text/javascript" src={`${script}.js`}></script>
        </body>
    </html>
)


Html.defaultProps = {
    preloadedState: {}
}


export default Html;