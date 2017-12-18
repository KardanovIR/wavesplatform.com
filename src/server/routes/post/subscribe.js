import { sanitize } from 'sanitizer';
import { validate } from 'email-validator';
import fetch from 'node-fetch';

import checkEnvVariable from 'src/server/utils/checkEnvVariable';

export default async (ctx, next) => {
  const email = sanitize(ctx.request.body.email);

  checkEnvVariable(['MAILCHIMP_LIST', 'MAILCHIMP_API_KEY']);

  if (validate(email)) {
    ctx.logger.info('Received an VALID email', { email });

    fetch(
      `https://w:${
        process.env.MAILCHIMP_API_KEY
      }@us13.api.mailchimp.com/3.0/lists/${
        process.env.MAILCHIMP_LIST
      }/members/`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          email_address: email,
          status: 'pending',
        }),
      }
    )
      .then(res => res.json())
      .catch(err => ctx.logger.error('Failed to subscribe', err));
  } else {
    ctx.logger.warn('Received an INVALID email', { email });
  }

  ctx.body = { result: 'success' };
  await next();
};
