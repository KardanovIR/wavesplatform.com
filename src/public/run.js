import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'



const getPreloadedState = () => window.__PRELOADED_STATE || {};



export const run = (Component, callback = () => {}) => {
	render(
		<Component state={ getPreloadedState() } />,	
		document.getElementById('app'),
		() => {
			document.querySelector('.loader').style.display = 'none';
			callback();
		}
	)
}