import React from 'react';

import Layout from '../../components/Layout';

import Anchor, { AnchorScrollProvider } from '../../../public/components/AnchorScroll';


const Page = () => (
    <Layout>
        <AnchorScrollProvider>
            <div>
                <Anchor style={{ height: "2000px", background: "lightgrey" }} anchor="devs">
                    Разработчикам
                </Anchor>
                <Anchor style={{ height: "2000px", background: "lightgreen" }} anchor="reasons">Reasons</Anchor>
            </div>
        </AnchorScrollProvider>
    </Layout>
)


export default Page;