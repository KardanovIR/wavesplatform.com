import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// React html component with <html>, <head> etc.
import Html from 'src/server/components/Html';
import FontInliner from 'src/server/components/FontInliner';


const store = createStore(s => s, {});


export const render = ({ script: scriptName, component: Component = 'span', title = 'Waves Platform' } = {}) =>
    async ctx => {

        // enable SSR only for production
        let RenderedComponent;
        if (process.env.NODE_ENV === 'production') {
            RenderedComponent = Component;
        } else {
            RenderedComponent = 'span';
        }

        // log render time
        const renderStart = new Date();
        // render component markup and styles
        const sheets = new SheetsRegistry();
        const content = renderToStaticMarkup(
            <JssProvider registry={sheets}>
                <Provider store={store}>    
                    <RenderedComponent initialState={ctx.state.initialState} />
                </Provider>
            </JssProvider>
        )
        ctx.accessLog.renderTime = new Date() - renderStart;


        // fonts
        const fonts = new SheetsRegistry();
        renderToStaticMarkup(
            <JssProvider registry={fonts}>
                <FontInliner />
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


        const html = renderToStaticMarkup(
            <Html
                title={title}
                script={script}
                vendorChunk={vendorChunk}
                content={content}
                fonts={fonts.toString()}
                style={sheets.toString()}
                initialState={ctx.state.initialState}
            />
        );

        ctx.body = `<!DOCTYPE html>${html}`;
    }