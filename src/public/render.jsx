import 'babel-polyfill';
import './polyfill';
import './rxImports';

import React from 'react';
import { render as reactDomRender } from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { AnchorScrollProvider } from 'src/public/components/AnchorScroll';

// i18n initialization
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import ko from 'react-intl/locale-data/ko';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...ko, ...zh, ...ru]);

// Cookies
import { CookiesProvider } from 'react-cookie';

// custom middleware
import customMiddleware from './middleware';

export const getInitialState = () => window.__INITIAL_STATE || {};
export const getMessages = () => window.__MESSAGES || {};
export const getLocale = () => window.__LOCALE;

// run app
function run(
  Component,
  {
    callback = () => {},
    reducer = s => s,
    epic = () => Observable.empty(),
    initialState = getInitialState(),
  } = {}
) {
  const appNode = document.getElementById('app');

  // redux store
  const store = createStore(
    reducer,
    initialState,
    compose(
      customMiddleware,
      applyMiddleware(thunk),
      applyMiddleware(createEpicMiddleware(epic)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return reactDomRender(
    <Provider store={store}>
      <IntlProvider
        locale={getLocale()}
        defaultLocale="en"
        messages={getMessages()}
      >
        <AnchorScrollProvider>
          <CookiesProvider>{Component}</CookiesProvider>
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
