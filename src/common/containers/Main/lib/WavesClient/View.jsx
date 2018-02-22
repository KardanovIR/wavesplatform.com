import React from 'react';

import TitleTextCTA from 'src/common/components/TitleTextCTA';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const MainScreen = ({ classes, onGetClientClick }) => (
  <div className={classes.root}>
    <Row>
      <Col xs={12} sm={6}>
        <div className={classes.titleTextCtaWrapper}>
          <TitleTextCTA
            title={<FormattedMessage id="home.wavesClient.title" />}
            titleType="display1"
            textType="body2"
            text={<FormattedMessage id="home.wavesClient.text" />}
            buttons={[
              <Button
                onClick={onGetClientClick}
                key="main_cta_button"
                target="_blank"
                href={url('online-client(beta)')}
                secondary
              >
                <FormattedMessage id="cta.onlineClient" />
              </Button>,
            ]}
            inverted
          />
        </div>
      </Col>
    </Row>
    <div xs={12} sm={6} className={classes.imageCol}>
      <img
        src={require('./img/nobg@1x.png')}
        srcSet={`${require('./img/nobg@1x.png')} 1x, ${require('./img/nobg@2x.png')} 2x`}
        alt=""
        className={classes.image}
      />
    </div>
  </div>
);

export default injectSheet(styles)(MainScreen);
