import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';
import styles from './styles';
import Button from 'src/common/components/Button';

const VacanciesContainer = ({ classes, onVacanciesClick }) => (
  <Row centered>
    <Col xs={12} sm={10} md={10}>
      <div className={classes.div}>
        <Row>
          <Col xs={12} sm={10} md={9}>
            <Typography type="display2" className={classes.text} align="left">
              <FormattedMessage id="company.vacancies.text" />
            </Typography>
          </Col>
        </Row>
        <Margin bottom={1} />

        <Button
            onClick={onVacanciesClick}
            href='https://job.wavesplatform.com'
            target="_blank"
            secondary>
          <FormattedMessage id="company.vacancies.title" />
        </Button>
      </div>
    </Col>
  </Row>
);

export default injectSheet(styles)(VacanciesContainer);
