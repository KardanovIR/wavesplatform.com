import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import Vacancies from 'src/common/containers/Vacancies';


import { FormattedMessage } from 'react-intl';



const VacanciesContainer = () => (
    <Row centered>
        <Col xs={12} sm={10} md={8}>
            <Typography type="display3" align="center">
                <FormattedMessage
                    id="company.vacancies.title"
                    defaultMessage="Current openings"
                />
            </Typography>

            <Margin bottom={3} />

            <Row centered>
                <Col xs={12} sm={10} md={9}>
                    <Typography type="body2" align="center">
                        <FormattedMessage
                            id="company.vacancies.text"
                            defaultMessage="We’d be happy to welcome you to our team. Come and change the world with us!"
                        />
                    </Typography>
                </Col>
            </Row>

            <Margin bottom={4} />

            <Vacancies />
        </Col>
    </Row>
);


export default VacanciesContainer;