import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// i18n initialization
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import zh from 'react-intl/locale-data/zh';
import ru from 'react-intl/locale-data/ru';

import locale from 'src/server/locale';

addLocaleData([...en, ...ko, ...zh, ...ru]);

// React html component with <html>, <head> etc.
import Html from 'src/server/components/Html';
import FontInliner from 'src/server/components/FontInliner';

import isProd from 'src/common/utils/isProd';
import checkEnvVariable from 'src/server/utils/checkEnvVariable';

import { CookiesProvider } from 'react-cookie';

checkEnvVariable('SERVER_NAME');

export const render = function({
  script: scriptName,
  component: Component = 'span',
  reducer = s => s,
  title = 'Waves Platform',
  // messages = {},
  description,
} = {}) {
  return async ctx => {
    // enable SSR only for production
    let RenderedComponent;
    if (process.env.NODE_ENV === 'production') {
      RenderedComponent = <Component initialState={ctx.state.initialState} />;
    } else {
      RenderedComponent = <span />;
    }

    // log render time
    const renderStart = new Date();
    // create store
    const store = createStore(reducer, ctx.state.initialState);
    // render component markup and styles
    const sheets = new SheetsRegistry();
    const content = renderToStaticMarkup(
      <JssProvider registry={sheets}>
        <CookiesProvider cookies={ctx.request.universalCookies}>
          <Provider store={store}>
            <IntlProvider
              locale={ctx.locale}
              defaultLocale="en"
              messages={locale[ctx.locale]}
            >
              {RenderedComponent}
            </IntlProvider>
          </Provider>
        </CookiesProvider>
      </JssProvider>
    );

    ctx.accessLog.renderTime = new Date() - renderStart;

    // fonts
    const fonts = new SheetsRegistry();
    renderToStaticMarkup(
      <JssProvider registry={fonts}>
        <FontInliner />
      </JssProvider>
    );

    // script paths
    let vendorChunk;
    let script;

    if (process.env.NODE_ENV === 'production') {
      // read file path fron assets
      script = ctx.state.assets[scriptName].js;
      vendorChunk = ctx.state.assets.vendor.js;
    } else {
      script =
        scriptName.indexOf('.js') > -1
          ? scriptName
          : `/static/${scriptName}.js`;
    }

    const html = renderToStaticMarkup(
      <Html
        title={title}
        description={description}
        script={script}
        vendorChunk={vendorChunk}
        locale={ctx.locale}
        availableLocales={ctx.availableLocales}
        messages={locale[ctx.locale]}
        content={content}
        fonts={fonts.toString()}
        style={sheets.toString()}
        initialState={ctx.state.initialState}
        gtmEnabled={isProd()}
        piwikEnabled={isProd()}
        sentryEnabled={isProd()}
        mailchimpEnabled={isProd()}
        serverName={process.env.SERVER_NAME}
      />
    );

    ctx.body = `<!DOCTYPE html>${html}`;
  };
};
