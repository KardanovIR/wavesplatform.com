import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import {Row, Col} from 'src/common/components/Grid';

import {FormattedMessage} from 'react-intl';
import injectSheet from 'react-jss';
import styles from './styles';
import Button from 'src/common/components/Button';

const VacanciesContainer = ({classes, onVacanciesClick}) => (
    <Row className={classes.div}>
        <Col xs={12} md={8} lg={5}>
            <Typography type="display2" className={classes.text} align="left">
                <FormattedMessage id="company.vacancies.text"/>
            </Typography>

            <Margin bottom={3}/>

            <Button
                onClick={onVacanciesClick}
                href='https://job.wavesplatform.com'
                target="_blank"
                secondary>
                <FormattedMessage id="company.vacancies.title"/>
            </Button>
        </Col>
    </Row>
);

export default injectSheet(styles)(VacanciesContainer);
