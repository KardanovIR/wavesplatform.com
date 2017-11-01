import { multiply, map } from 'ramda';

const TOTAL_MINERS_BALANCE = 50000000; // 50 mil
const AVG_WAVES_PER_WEEK = 350;
const BLOCKS_PER_WEEK = 1440 * 7;
const MRT_BLOCKS_THRESHOLD = 700;

// rates
const WAVES_USD = 4;
const MRT_WAVES = 0.02;


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
    res.total = (res.waves + res.mrt * MRT_WAVES) * WAVES_USD;

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

    // console.log

    return map(multiply(weeksInPeriod[term]), getWeeklyRewards(balance));
};
