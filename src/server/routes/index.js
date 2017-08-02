import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';


import Router from 'koa-router';


// @TODO replace by React 404
import notFound from 'src/server/views/404';



// React html component with <html>, <head> etc.
import Html from '../components/Html';

// page components
import Main from '../../common/containers/Main';
import Developers from '../../common/containers/Developers';



const getHtml = (Component, page) => `<!DOCTYPE html>${renderToStaticMarkup(
    <Html script={page}>
        <Component />
    </Html>
)}`;



const router = new Router();

router
    .get('/', async ctx => {
        ctx.body = getHtml(Main, 'main');
    })
    // .get('/product', async ctx => {
    //     ctx.body = view({ scriptUrl: 'product' });
    // })
    .get('/developers', async ctx => {
        ctx.body = getHtml(Developers, 'developers');
    })
    // .get('/company', async ctx => {
    //     ctx.body = view({ scriptUrl: 'company' });
    // })
    .post('/api/subscription', async ctx => {
        console.log(ctx.request.body.email);
        ctx.body = { result: 'success' };
    })
    .get('*', async ctx => {
        ctx.body = notFound();
    })


export default router;