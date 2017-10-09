import { map } from 'ramda';


const pad = number => ("0" + number).substr(-2);


export default () => {
    const countDownDate = new Date("Oct 12, 2017 00:00:00").getTime();
    const distance = countDownDate - new Date().getTime();

    return map(pad, {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
    })
}