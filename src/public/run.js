import 'babel-polyfill'

import { render } from 'react-dom'



export const getPreloadedState = () => window.__PRELOADED_STATE || {};



export const run = (Component, callback = () => {}) => {
    const appNode = document.getElementById('app');

    render(
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