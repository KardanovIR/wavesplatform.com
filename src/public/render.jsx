import 'babel-polyfill';

import React from 'react';
import { render as reactDomRender } from 'react-dom';



import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// custom middleware
import { log } from './middleware';



export const getInitialState = () => window.__INITIAL_STATE || {};




// redux store
const store = createStore(
	s => s,
	getInitialState(),
	compose(
		applyMiddleware(log),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)




// run app
export const render = (Component, callback = () => { }) => {
    const appNode = document.getElementById('app');

    return reactDomRender(
        (
            <Provider store={store}>
                { Component }
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