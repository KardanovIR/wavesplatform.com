import 'babel-polyfill';

import Koa from 'koa';
import serve from 'koa-static';
import Pug from 'koa-pug';


import router from './routes';




try {
	// define
	const app = new Koa,
		pug = new Pug({
			viewPath: './src/server/views',
			basedir: './src/server/views',
			app: app
		});


	app
		.use(serve('./dist'))
		.use(router.routes());

		
	// to init socket.io
	const server = require('http').Server(app.callback());

	server.listen(3001)
} catch (err) {
	console.error(err)
}