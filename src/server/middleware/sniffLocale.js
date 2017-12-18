import { Locales } from 'locale';

const supported = ['ru', 'en'];

const sniffLocale = async (ctx, next) => {
  const cookie = ctx.cookies.get('locale');

  if (cookie && ~supported.indexOf(cookie)) {
    ctx.locale = cookie;
  } else {
    const sniffedLocale = new Locales(ctx.req.headers['accept-language'], 'en')
      .best(new Locales(supported))
      .toString();

    ctx.cookies.set('locale', sniffedLocale, {
      maxAge: 15778476000, // 0.5 years
      domain: '*.wavesplatform.com',
    });

    ctx.locale = sniffedLocale;
  }

  await next();
};

export default sniffLocale;
