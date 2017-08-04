import breakpoints from './breakpoints';


export const base = {
    fontFamily: 'TTNorms, arial, sans-serif',
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 1.76,
    margin: 0
}


const display = {
    fontWeight: 500,
}


export const display4 = {
    ...base,

    fontSize: 28,
    lineHeight: 1.11,
    letterSpacing: '-2px',
    fontWeight: 700,
}

export const display3 = {
    ...base,
    ...display,

    fontSize: 28,
    lineHeight: 1.61,
    letterSpacing: '-0.8px',
}

export const display2 = {
    ...base,
    ...display,

    fontSize: 24,
    lineHeight: 1.32,
}

export const display1 = {
    ...base,
    ...display,

    fontSize: 18,
    lineHeight: 1.32,
}

export const body = base

export const quote = {
    ...body,
    fontStyle: 'italic'
}

export const numeral = {
    fontFamily: 'arial, sans-serif',
    fontSize: 20,
    lineHeight: 1.33,
    fontStyle: 'normal',
}

export const button = {
    fontSize: 13,
    textTransforn: 'uppercase',
    lineHeight: 'normal',
    letterSpacing: '0.1px',
}



const typography = {
    display1,
    display2,
    display3,
    display4,
    body,
    quote,
    numeral,
    button,

    [`@media (min-width: ${breakpoints.md}px)`]: {
        display1: { fontSize: 24 },
        display2: { fontSize: 34 },
        display3: { fontSize: 44 },
        display4: { fontSize: 64 },
        body: { fontSize: 17 },
        quote: { fontSize: 17 },
        numeral: { fontSize: 30 },
        button: { fontSize: 15 },
    }
}

export { typography }
export default typography