import { combineMobileDesktopStyles } from './utils/combineMobileDesktopStyles';


export const global = {
    fontFamily: 'TTNorms, arial, sans-serif',
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 1.67,
    margin: 0,
    fontVariantLigatures: 'none',
};


const creatyTypography = (palette) => {

    const base = {
        ...global,
        color: palette.gray[800]
    }

    const display = {
        fontWeight: 500,
        color: palette.primary[700]
    };

    return {
        display4: combineMobileDesktopStyles(
            {
                ...base,
                ...display,
                fontSize: 28,
                lineHeight: 1.11,
                fontWeight: 700,
            },
            {
                fontSize: 64
            }
        ),
        display3: combineMobileDesktopStyles(
            {
                ...base,
                ...display,
                fontSize: 28,
                lineHeight: 1.36,
            },
            {
                fontSize: 44,
                lineHeight: 1.23,
            }
        ),
        display2: combineMobileDesktopStyles(
            {
                ...base,
                ...display,
                fontSize: 24,
                lineHeight: 1.42,
            },
            {
                fontSize: 34,
                lineHeight: 1.29,
            }
        ),
        display1: combineMobileDesktopStyles(
            {
                ...base,
                ...display,
                fontSize: 18,
                lineHeight: 1.56,
            },
            {
                fontSize: 24,
                lineHeight: 1.42,
            }
        ),
        body: combineMobileDesktopStyles(
            base,
            {
                fontSize: 17,
                lineHeight: 1.59,
            }
        ),
        body2: combineMobileDesktopStyles(
            {
                ...base,
                fontSize: 17,
                lineHeight: 1.35,
            },
            {
                fontSize: 20,
                lineHeight: 1.59,
            }
        ),
        quote: combineMobileDesktopStyles(
            {
                ...base,
                fontStyle: 'italic',
                color: palette.gray[300]
            },
            {
                fontSize: 17,
                lineHeight: 1.59,
            }
        ),
        button: combineMobileDesktopStyles(
            {
                ...global,
                fontSize: 13,
                textTransform: 'uppercase',
                lineHeight: 'normal',
                letterSpacing: '1px',
            },
            {
                fontSize: 15,
            }
        ),
        numeral: combineMobileDesktopStyles(
            {
                fontFamily: 'arial, sans-serif',
                fontSize: 20,
                lineHeight: 'normal',
                fontStyle: 'normal',
                color: palette.primary[700]
            },
            {
                fontSize: 30,
            }
        ),
    }
}


export { creatyTypography }
export default creatyTypography