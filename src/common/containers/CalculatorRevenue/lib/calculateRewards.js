import { multiply, map } from 'ramda';

const TOTAL_MINERS_BALANCE = 45000000; // 50 mil
const AVG_WAVES_PER_DAY = 100;
const BLOCKS_PER_DAY = 1440;
const MRT_BLOCKS_THRESHOLD = 70;
const MRT_PER_BLOCK = 30;


const getDailyRewards = balance => {
    const share = balance / TOTAL_MINERS_BALANCE;

    const blocks = share * BLOCKS_PER_DAY;

    const mrt = blocks * MRT_PER_BLOCK + Math.min(blocks, MRT_BLOCKS_THRESHOLD) * MRT_PER_BLOCK;

    const res = {
        waves: share * AVG_WAVES_PER_DAY,
        mrt: mrt
    };

    return res;
};

export default (balance, term) => {
    const daysInPeriod = {
        '1w': 7,
        '1m': 30,
        '6m': 182,
        '1y': 365,
        '3y': 1095,
        '5y': 1825,
    };

    return map(multiply(daysInPeriod[term]), getDailyRewards(balance));
};
