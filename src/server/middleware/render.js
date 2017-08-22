import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';

// React html component with <html>, <head> etc.
import Html from 'src/server/components/Html';


export const render = (scriptName, Component = 'span') =>
    async ctx => {

        // enable SSR only for production
        let RenderedComponent;
        if (process.env.NODE_ENV === 'production') {
            RenderedComponent = Component;
        } else {
            RenderedComponent = 'span';
        }


        // component markup and styles
        const sheets = new SheetsRegistry();

        const content = renderToStaticMarkup(
            <JssProvider registry={sheets}>
                <RenderedComponent initialState={ctx.state.initialState} />
            </JssProvider>
        )


        // script paths
        let vendorChunk;
        let script;

        if (process.env.NODE_ENV === 'production') {
            // read file path fron assets
            script = '/static' + ctx.state.assets[scriptName].js;
            vendorChunk = '/static' + ctx.state.assets.vendor.js;
        } else {
            script = `/static/${scriptName}.js`;
        }


        ctx.body = `<!DOCTYPE html>${renderToStaticMarkup(
            <Html
                script={script}
                vendorChunk={vendorChunk}
                content={content}
                style={sheets.toString()}
                initialState={ctx.state.initialState}
            />
        )}`;
    }