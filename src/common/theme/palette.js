export const blue = {
    0: 'white',
    300: '#60a9ff',
    500: '#4f77fc',
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
    50: '#fafafa',
    100: '#ebecf0',
    200: '#d8dbed',
    300: '#9cb4e1',
    400: '#A9B1BD',
    500: '#5F7090',
    600: '#6a7689',
    700: '#48576f',
    800: '#2d374b',
}

export const cyan = {
    300: '#c0eff8',
}


function hexToRgbA(hex, opacity = 1) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
    }
    throw new Error('Bad Hex');
}



const palette = {
    primary,
    secondary,
    success,
    danger,
    gray,
    cyan,
    getColor: color => palette[color.split('-')[0]][color.split('-')[1]],
    opaque: hexToRgbA
}

export { palette }
export default palette