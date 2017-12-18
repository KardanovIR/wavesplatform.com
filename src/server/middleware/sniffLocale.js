import { Locales } from 'locale';
import isProd from 'src/common/utils/isProd';

const supported = ['ru', 'en'];

const cookieDomain = isProd() ? { domain: '*.wavesplatform.com' } : {};

const sniffLocale = async (ctx, next) => {
  const cookie = ctx.request.universalCookies.get('locale');

  if (cookie && ~supported.indexOf(cookie)) {
    ctx.locale = cookie;
  } else {
    const sniffedLocale = new Locales(ctx.req.headers['accept-language'], 'en')
      .best(new Locales(supported))
      .toString();

    ctx.request.universalCookies.set('locale', sniffedLocale, {
      maxAge: 15778476000, // 0.5 years
      ...cookieDomain,
    });

    ctx.locale = sniffedLocale;
  }

  await next();
};

export default sniffLocale;
