import { path } from 'ramda';


export default palette => color => {
    // old API
    if (~color.indexOf('-')) {
        return path(color.split('-'), palette);
    }

    // new API
    if (~color.indexOf('[')) {
        const arr = color.split('[');
        arr[1] = arr[1].substring(0,3);
        return path(arr, palette);
    }
}