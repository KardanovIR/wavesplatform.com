import 'babel-polyfill';

import { render as reactDomRender } from 'react-dom';



export const getPreloadedState = () => window.__PRELOADED_STATE || {};



export const render = (Component, callback = () => {}) => {
    const appNode = document.getElementById('app');

    return reactDomRender(
        Component,	
        appNode,
        () => {
            // jss ssr preloaded <style> tag remove
            const jssPreloadedStyles = document.querySelector('[data-jss-server]');
            jssPreloadedStyles.parentNode.removeChild(jssPreloadedStyles);

            // @todo remove in production
            // ssr indicating half-opaque markup
            appNode.style.opacity = '';
            
            callback();
        }
    )
}