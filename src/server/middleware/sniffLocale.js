import { Locales } from 'locale';
import isProd from 'src/common/utils/isProd';

const supported = ['ko', 'en'];

const cookieDomain = isProd() ? { domain: '.wavesplatform.com' } : {};

const sniffLocale = async (ctx, next) => {
  const cookie = ctx.request.universalCookies.get('locale');

  if (cookie && ~supported.indexOf(cookie)) {
    // @todo change when translations are ready
    ctx.locale = cookie;
  } else {
    const sniffedLocale = new Locales(ctx.req.headers['accept-language'], 'en')
      .best(new Locales(supported))
      .toString();

    ctx.request.universalCookies.set('locale', sniffedLocale, {
      maxAge: 15778476000, // 0.5 years
      httpOnly: false,
      ...cookieDomain,
    });

    ctx.locale = sniffedLocale;
  }
  //@hack if sniffer screws
  ctx.locale = ctx.locale || 'en';
  ctx.availableLocales = supported;

  await next();
};

export default sniffLocale;
