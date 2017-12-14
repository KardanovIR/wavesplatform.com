import test from 'tape';
import url, { createUrlFromObj, getServerName } from './index';

test('Get server name should', function(t) {
  t.equal(
    getServerName(),
    'wavesplatform.com',
    'wavesplatform.com with no parameters'
  );

  process.env.SERVER_NAME = 'qwe.rty';
  t.equal(getServerName(), 'qwe.rty', 'correctly take from process.env');
  delete process.env.SERVER_NAME;

  global.window = {
    __SERVER_NAME: 'window.object',
  };
  t.equal(
    getServerName(),
    'window.object',
    'correctly take from window object'
  );
  delete global.window;

  t.end();
});

test('Create url from object should', function(t) {
  t.equal(
    createUrlFromObj({
      protocol: 'https',
      subdomain: 'waves-ng',
      domain: 'wavesplatform.com',
      pathname: '/',
    }),
    'https://waves-ng.wavesplatform.com/',
    'construct url with subdomain'
  );

  t.equal(
    createUrlFromObj({
      protocol: 'ftp',
      domain: 'qwe.rty',
      pathname: '/',
    }),
    'ftp://qwe.rty/',
    'construct url without subdomain'
  );

  t.throws(
    () =>
      createUrlFromObj({
        protocol: 'http',
        domain: 'qwe.rty',
      }),
    'Should throw if no pathname provided'
  );

  t.end();
});

test('Url function should return correct', function(t) {
  t.equal(url('home'), 'https://wavesplatform.com/', 'home page url');

  t.equal(
    url('product'),
    'https://wavesplatform.com/product',
    'product page url'
  );

  t.equal(
    url('developers'),
    'https://wavesplatform.com/developers',
    'developers page url'
  );

  t.equal(
    url('get-waves'),
    'https://wavesplatform.com/get-waves',
    'get-waves page url'
  );

  t.equal(
    url('waves-ng'),
    'https://waves-ng.wavesplatform.com/',
    'subdomain waves-ng url'
  );

  t.throws(
    () => url('some-crap'),
    /No 'some-crap' url exists/,
    'correct error throw if incorrect url key provided'
  );

  t.end();
});
