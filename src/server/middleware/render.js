import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';

// React html component with <html>, <head> etc.
import Html from 'src/server/components/Html';


export const render = (scriptName, Component = 'span') =>
    async ctx => {
        const sheets = new SheetsRegistry()

        const content = renderToStaticMarkup(
            <JssProvider registry={sheets}>
                <Component initialState={ctx.state.initialState} />
            </JssProvider>
        )

        ctx.body = `<!DOCTYPE html>${renderToStaticMarkup(
            <Html
                script={scriptName}
                content={content}
                style={sheets.toString()}
                initialState={ctx.state.initialState}
            />
        )}`;
    }