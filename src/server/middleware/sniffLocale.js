import { Locales } from 'locale';

const supported = new Locales(['ru', 'en']);

const sniffLocale = async (ctx, next) => {
  const cookie = ctx.cookies.get('locale');
  if (cookie && ~supported.indexOf(cookie)) {
    ctx.locale = cookie;
  } else {
    const sniffedLocale = new Locales(ctx.req.headers['accept-language'], 'en')
      .best(supported)
      .toString();

    ctx.locale = sniffedLocale;
    ctx.locale = 'ru';
    await next();
  }
};

export default sniffLocale;
