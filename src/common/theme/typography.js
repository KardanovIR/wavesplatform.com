export const base = {
    fontFamily: 'TTNorms, serif',
    fontSize: 17,
    fontStyle: 'normal',
    lineHeight: 1.76,
}

const display = {
    fontWeight: 500,
}


export const display1 = {
    ...base,
    ...display,

    fontSize: 64,
    lineHeight: 1.11,
    letterSpacing: '-2px',
}

export const display2 = {
    ...base,
    ...display,

    fontSize: 44,
    lineHeight: 1.61,
    letterSpacing: '-0.8px',
}

export const display3 = {
    ...base,
    ...display,

    fontSize: 34,
    lineHeight: 1.32,
}

export const display4 = {
    ...base,
    ...display,

    fontSize: 24,
    lineHeight: 1.32,
}

export const body = base

export const quote = {
    ...body,
    fontStyle: 'italic'
}

export const number = {
    fontFamily: 'arial, sans-serif',
    fontSize: 30,
    lineHeight: 1.33,
    fontStyle: 'normal',
}

export const button = {
    fontSize: 30,
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
    number,
    button
}

export { typography }
export default typography