export const blue = {
    0: 'white',
    300: '#60a9ff',
    500: '#4f89dc',
    700: '#263f6f',
    900: '#0a1b43',
}

export const primary = blue;

export const secondary = {
    500: '#ea9019'
}

export const success = {
    500: '#22d64c'
}

export const danger = {
    500: '#cc1442'
}


export const gray = {
    0: '#fff',
    50: '#f9f7ff',
    100: '#d8dbed',
    300: '#6479a1',
    500: '#6a7689',
    700: '#48576f',
    800: '#2d374b',
}



const palette = {
    primary,
    secondary,
    success,
    danger,
    gray,
    getColor: color => palette[color.split('-')[0]][color.split('-')[1]]
}

export { palette }
export default palette