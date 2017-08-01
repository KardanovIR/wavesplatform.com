import 'babel-polyfill'

import { render } from 'react-dom'



export const getPreloadedState = () => window.__PRELOADED_STATE || {};



export const run = (Component, callback = () => {}) => {
    render(
        Component,	
        document.getElementById('app'),
        () => {
            document.querySelector('.loader').style.display = 'none';
            callback();
        }
    )
}