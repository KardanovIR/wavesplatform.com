import 'babel-polyfill'

import { render } from 'react-dom'



export const getPreloadedState = () => window.__PRELOADED_STATE || {};



export const run = (Component, callback = () => {}) => {
    const appNode = document.getElementById('app');

    render(
        Component,	
        appNode,
        () => {
            appNode.style.opacity = '';
            callback();
        }
    )
}