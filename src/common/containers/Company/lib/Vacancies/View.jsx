import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import Vacancies from 'src/common/containers/Vacancies';


import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';
import styles from './styles';

const VacanciesContainer = ({classes}) => (
    <Row centered>
        <Col xs={12} sm={10} md={8}>
            <div className={classes.div}>
                <Typography type="display2" style={{fontSize: 23}} align="left">
                    <FormattedMessage
                        id="company.vacancies.title"
                        defaultMessage="Current openings"
                    />
                </Typography>

                <Margin bottom={1} />

                <Row>
                    <Col xs={12} sm={10} md={9}>
                        <Typography type="display2" align="left">
                            <FormattedMessage
                                id="company.vacancies.text"
                                defaultMessage="We’d be happy to welcome you to our team. Come and change the world with us!"
                            />
                        </Typography>
                    </Col>
                </Row>
            </div>
            <Margin bottom={4} />

            <Vacancies />
        </Col>
    </Row>
);


export default injectSheet(styles)(VacanciesContainer);