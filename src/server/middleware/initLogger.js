// logger
import winston from 'winston';

const DELIMITER = ' — ';


const formatMeta = meta => {
    let result = '';

    if (Object.keys(meta).length) {
        result += DELIMITER;
        Object.keys(meta).forEach((key, index) => {
            if (index !== 0) {
                result += ', ';
            }
            result += `${key}=${meta[key]}`;
        })
    }
    
    return result;
}


const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            // timestamp: true,
            formatter: opts => 
                `[ ${new Date().toISOString()} | ${opts.level.toUpperCase()} ]`
                + DELIMITER
                + opts.message
                + formatMeta(opts.meta)
        })
    ]
})

export default async (ctx, next) => {
    ctx.logger = logger;
    await next();
}