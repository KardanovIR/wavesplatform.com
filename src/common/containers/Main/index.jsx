import React from 'react';

import Layout from '../../components/Layout';

import Typography from '../../components/Typography';


import { Row, Col } from '../../components/Grid';




const Page = () => (
    <Layout>
        <Row>
            <Col xs={12} md={6}>
                <Typography type="display4">
                    Главная страница
                 </Typography>
            </Col>
            <Col xs={12} md={6}>
                <Typography type="body">
                    Главная страница
                 </Typography>
            </Col>
        </Row>
    </Layout>
)


export default Page;