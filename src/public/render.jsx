import 'babel-polyfill';
import './polyfill';

import React from 'react';
import { render as reactDomRender } from 'react-dom';


import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';


// i18n initialization
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);


// custom middleware
import { googleAnalytics } from './middleware';



export const getInitialState = () => window.__INITIAL_STATE || {};
export const getMessages = () => window.__MESSAGES || {};
export const getLocale = () => window.__LOCALE;




// redux store
const store = createStore(
    s => s,
    getInitialState(),
    compose(
        applyMiddleware(googleAnalytics),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)



// run app
const run = (Component, callback = () => { }) => {
    const appNode = document.getElementById('app');

    return reactDomRender(
        (
            <Provider store={store}>
                <IntlProvider locale={getLocale()} defaultLocale="en" messages={getMessages()}>
                    {Component}
                </IntlProvider>
            </Provider>
        ),
        appNode,
        () => {
            // jss ssr preloaded <style> tag remove
            const jssPreloadedStyles = document.querySelector('[data-jss-server]');
            jssPreloadedStyles.parentNode.removeChild(jssPreloadedStyles);

            callback();
        }
    )
}


export const render = async (...args) => {
    if (!global.Intl) {
        await import('intl');
        await Promise.all([
            import('intl/locale-data/jsonp/en.js')
        ]);
        run(...args);
    } else {
        run(...args)
    }
}