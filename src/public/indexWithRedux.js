import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'


import { createEpicMiddleware } from 'redux-observable';



import App from './common/App'
import reducer from './App/reducer'


import rootEpic from './App/epic'


const epicMiddleware = createEpicMiddleware(rootEpic)


const store = createStore(
	reducer,
	compose(
		applyMiddleware(epicMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)	
)
// sagaMiddleware.run(rootSaga)


function render() {
	ReactDOM.render(
		<App
			state={store.getState()}
			dispatch={store.dispatch}
		/>,
		document.getElementById('app'),
		() => document.querySelector('.loader').style.display = 'none'
	)
}

render()
store.subscribe(render)