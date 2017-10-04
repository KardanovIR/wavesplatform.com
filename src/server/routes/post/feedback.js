import { sanitize } from 'sanitizer';

import { map } from 'ramda';

import checkEnvVariable from 'src/server/utils/checkEnvVariable';



export default async (ctx, next) => {
    const safeBody = map(sanitize, ctx.request.body);

    checkEnvVariable(ctx, [
        'SMTP_SERVER',
        'SMTP_LOGIN',
        'SMTP_PASSWORD',
    ]);

    console.log(
        process.env.SMTP_SERVER,
        process.env.SMTP_LOGIN,
        process.env.SMTP_PASSWORD,
    );

    console.log(safeBody);
    
    // console.log(email);

    // if (validate(email)) {
    //     ctx.logger.info('Received an VALID email', { email });

    //     fetch(`https://w:${process.env.MAILCHIMP_API_KEY}@us13.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST}/members/`, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'POST',
    //         body: JSON.stringify({
    //             email_address: email,
    //             status: "subscribed",
    //         })
    //     })
    //         .then(res => res.json())
    //         .catch(err => ctx.logger.error('Failed to subscribe', err))

    // } else {
    //     ctx.logger.warn('Received an INVALID email', { email });
    // }


    ctx.body = { result: 'success' };
    await next();
}
