import { map } from 'ramda';

const pad = number => ("0" + number).substr(-2);


export default timestamp => {
    return map(pad, {
        minutes: Math.floor(timestamp / (1000 * 60)),
        seconds: Math.floor((timestamp % (1000 * 60)) / 1000),
    })
}