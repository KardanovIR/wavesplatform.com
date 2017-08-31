import 'babel-polyfill';

import { render as reactDomRender } from 'react-dom';



export const getInitialState = () => window.__INITIAL_STATE || {};



export const render = (Component, callback = () => {}) => {
    const appNode = document.getElementById('app');

    return reactDomRender(
        Component,	
        appNode,
        () => {
            // jss ssr preloaded <style> tag remove
            const jssPreloadedStyles = document.querySelector('[data-jss-server]');
            jssPreloadedStyles.parentNode.removeChild(jssPreloadedStyles);
                        
            callback();
        }
    )
}