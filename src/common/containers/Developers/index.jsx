import React from 'react';

import Layout from '../../components/Layout';
import SubscriptionForm from '../SubscriptionForm';



import Anchor, { AnchorScrollProvider } from '../../../public/components/AnchorScroll';


const Page = () => (
    <Layout>
        <AnchorScrollProvider>
            <div>
                Страница для разработчиков
                <br />
                <br />
                <SubscriptionForm />
                <Anchor style={{ height: "2000px", background: "lightgrey" }} anchor="devs">
                    Информация разрабам
                </Anchor>
                <Anchor style={{ height: "2000px", background: "lightgreen" }} anchor="reasons">Reasons</Anchor>
            </div>
        </AnchorScrollProvider>
    </Layout>
)


export default Page;