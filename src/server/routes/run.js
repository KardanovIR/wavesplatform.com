import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';

// React html component with <html>, <head> etc.
import Html from '../components/Html';


export const run = (Component, scriptName) =>
    async ctx => {
        const sheets = new SheetsRegistry()

        const content = renderToStaticMarkup(
            <JssProvider registry={sheets}>
                <Component />
            </JssProvider>
        )

        ctx.body = `<!DOCTYPE html>${renderToStaticMarkup(
            <Html
                script={scriptName}
                content={content}
                style={sheets.toString()}
            />
        )}`;
    }