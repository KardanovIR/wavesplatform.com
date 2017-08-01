import React from 'react';

import { run } from '../run';

import Layout from '../../common/components/Layout';
import Main from '../../common/containers/Main';


run(
    <Layout>
        <Main />
    </Layout>
)

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('../../common/containers/Main', function () {
            console.log('Accepting the updated Main module!');
            run(
                <Layout>
                    <Main />
                </Layout>
            )
        })
    }
}