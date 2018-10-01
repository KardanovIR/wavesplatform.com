import 'babel-polyfill';
import './polyfill';
import './rxImports';

import React from 'react';
import { render as reactDomRender } from 'react-dom';

// redux
import { createStore } from './createStore';
import { Provider } from 'react-redux';

import { AnchorScrollProvider } from 'src/public/components/AnchorScroll';
import ThemeProvider from 'src/common/components/ThemeProvider';

// i18n initialization
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import ko from 'react-intl/locale-data/ko';
import zh from 'react-intl/locale-data/zh';
import hi from 'react-intl/locale-data/hi';

addLocaleData([...en, ...ko, ...zh, ...ru, ...hi]);

// Cookies
import { CookiesProvider } from 'react-cookie';

export const getInitialState = () => window.__INITIAL_STATE;
export const getMessages = () => window.__MESSAGES || {};
export const getLocale = () => window.__LOCALE;

// run app
function run(
  Component,
  { callback = () => {}, reducer, initialState = getInitialState(), epic } = {}
) {
  const appNode = document.getElementById('app');

  const store = createStore(reducer, initialState, epic);

  return reactDomRender(
    <Provider store={store}>
      <IntlProvider
        locale={getLocale()}
        defaultLocale="en"
        messages={getMessages()}
      >
        <AnchorScrollProvider>
          <CookiesProvider>
            <ThemeProvider>{Component}</ThemeProvider>
          </CookiesProvider>
        </AnchorScrollProvider>
      </IntlProvider>
    </Provider>,
    appNode,
    () => {
      // jss ssr preloaded <style> tag remove
      const jssPreloadedStyles = document.querySelector('[data-jss-server]');
      jssPreloadedStyles.parentNode.removeChild(jssPreloadedStyles);

      callback();
    }
  );
}

export const render = async (...args) => {
  if (!global.Intl) {
    await import('intl');
    await Promise.all([import('intl/locale-data/jsonp/en.js')]);
    run(...args);
  } else {
    run(...args);
  }
};
