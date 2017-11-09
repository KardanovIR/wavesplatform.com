import { multiply, map } from 'ramda';

const TOTAL_MINERS_BALANCE = 50000000; // 50 mil
const AVG_WAVES_PER_WEEK = 350;
const BLOCKS_PER_WEEK = 1440 * 7;
const MRT_BLOCKS_THRESHOLD = 700;


const getWeeklyRewards = balance => {
    const share = balance / TOTAL_MINERS_BALANCE;

    const blocks = share * BLOCKS_PER_WEEK;
    let mrt;
    if (blocks < MRT_BLOCKS_THRESHOLD) {
        mrt = blocks * 20;
    } else {
        mrt = MRT_BLOCKS_THRESHOLD * 20 + (blocks - MRT_BLOCKS_THRESHOLD) * 10;
    }

    const res = {
        waves: share * AVG_WAVES_PER_WEEK,
        mrt: mrt
    };

    return res;
};

export default (balance, term) => {
    const weeksInPeriod = {
        '1w': 1,
        '1m': 4,
        '6m': 25,
        '1y': 50,
        '3y': 150,
        '5y': 250,
    };

    return map(multiply(weeksInPeriod[term]), getWeeklyRewards(balance));
};
