import nodemailer from 'nodemailer';
import { sanitize } from 'sanitizer';

import { map } from 'ramda';

import checkEnvVariable from 'src/server/utils/checkEnvVariable';

import template from './template';



const createMailOptions = data => {
    checkEnvVariable([
        'EMAIL_PARTNERSHIP',
        'EMAIL_EVENTS',
        'EMAIL_MEDIA',
        'EMAIL_JOBS',
    ]);

    const addressMap = {
        partnership: process.env.EMAIL_PARTNERSHIP,
        events: process.env.EMAIL_EVENTS,
        media: process.env.EMAIL_MEDIA,
        jobs: process.env.EMAIL_JOBS
    };


    return {
        from: '"Waves Website" <wavesplatform@yandex.ru>',
        to: addressMap[data.reason],
        subject: `Waves Website ${data.reason} request`,
        text: template(data.email, data.message),
    };
}


const createTransport = () => {
    checkEnvVariable([
        'SMTP_SERVER',
        'SMTP_LOGIN',
        'SMTP_PASSWORD',
    ]);
    return nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_LOGIN,
            pass: process.env.SMTP_PASSWORD
        }
    });
}






export default () => {
    const transport = createTransport();

    return async (ctx, next) => {
        const safeBody = map(sanitize, ctx.request.body);

        transport.sendMail(
            createMailOptions(safeBody),
            (error, info) => {
                if (error) {
                    ctx.logger.error('Email sending error');
                    ctx.throw(500, 'Email sending error');
                }
                ctx.logger.info(`Email sent succesfully | messageId=${info.messageId}`);
            }
        );
        
        ctx.body = { result: 'success' };
        await next();
    }
}