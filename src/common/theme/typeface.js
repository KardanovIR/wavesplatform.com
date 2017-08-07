const typeface = {
    '@font-face': [
        {
            fontFamily: 'TTNorms',
            src: `url(${require('./fonts/TTNorms-Bold.woff2')})`,
            fallbacks: [
                { src: `url(${require('./fonts/TTNorms-Bold.woff')}) format(woff)` }
            ],
            fontWeight: 700,
            fontStyle: 'normal'
        },
        {
            fontFamily: 'TTNorms',
            src: `url(${require('./fonts/TTNorms-Medium.woff2')})`,
            fallbacks: [
                { src: `url(${require('./fonts/TTNorms-Medium.woff')}) format(woff)` }
            ],
            fontWeight: 500,
            fontStyle: 'normal'
        },
        {
            fontFamily: 'TTNorms',
            src: `url(${require('./fonts/TTNorms-Italic.woff2')})`,
            fallbacks: [
                { src: `url(${require('./fonts/TTNorms-Italic.woff')}) format(woff)` }
            ],
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
        {
            fontFamily: 'TTNorms',
            src: `url(${require('./fonts/TTNorms-Regular.woff2')})`,
            fallbacks: [
                { src: `url(${require('./fonts/TTNorms-Regular.woff')}) format(woff)` }
            ],
            fontWeight: 'normal',
            fontStyle: 'normal'
        },
    ]
}

export default typeface;