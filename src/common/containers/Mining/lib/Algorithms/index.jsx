import React from 'react';

import Margin from 'src/common/components/Margin';
import Hidden from 'src/common/components/Hidden';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

import Card from './lib/Card';

import ImagePoS from '!svg-react-loader!./img/Proof-of-Stake.svg';
import ImagePoSMobile from '!svg-react-loader!./img/Proof-of-Stake.svg';
import ImagePoW from '!svg-react-loader!./img/Proof-of-Work.svg';
import ImagePoWMobile from '!svg-react-loader!./img/Proof-of-Work.svg';

import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';
import styles from './styles';

const Algorithms = ({ classes }) => (
  <div>
    <ContentContainer>
      <SectionTitleText
        align="left"
        titleType="display1"
        titleWeight={600}
        title={
          <FormattedMessage
            id="mining.algorithms.title"
            defaultMessage="Mining in Waves"
          />
        }
        text={
          <FormattedMessage
            id="mining.algorithms.text"
            defaultMessage="Install your node and help us power the Waves blockchain. A simple hosted server is all the hardware you’ll need."
          />
        }
      />
      <Row className={classes.cards}>
        <Col xs={12} sm={8} md={6} lg={5}>
          <Card
            title={
              <Typography className={classes.title}>
                <FormattedMessage
                  id="mining.algorithms.pow.title"
                  defaultMessage="Proof-of-work"
                />
              </Typography>
            }
            imageMobile={<ImagePoWMobile className={classes.infograph} />}
            image={<ImagePoW className={classes.infograph} />}
            text={
              <FormattedMessage
                id="mining.algorithms.pow.text"
                defaultMessage="Mining cryptocurrencies often requires expensive hardware, specialist knowledge and hours of dedicated work and patience. That’s because most cryptocurrencies are mined through Proof-of-Work. "
              />
            }
          />
        </Col>
        <Margin bottom={4} xsOnly />

        <Col xs={12} sm={8} md={6} lg={5}>
          <Card
            title={
              <Typography className={classes.title}>
                <FormattedMessage
                  id="mining.algorithms.pos.title"
                  defaultMessage="Proof-of-stake"
                />
              </Typography>
            }
            imageMobile={<ImagePoSMobile className={classes.infograph} />}
            image={<ImagePoS className={classes.infograph} />}
            text={
              <Typography className={classes.textDescription}>
                <FormattedMessage
                  id="mining.algorithms.pos.text"
                  defaultMessage="Waves use a Proof-of-Stake algorithm in which the WAVES you own (or that have been leased to you) reflect your mining power. The more you own, the higher your chances of processing the next block and receiving the transaction fees as a reward. Essentially it’s a form of interest on your balance."
                />
              </Typography>
            }
          />
        </Col>
        <Margin bottom={4} xsOnly />
      </Row>
    </ContentContainer>
  </div>
);

export default injectSheet(styles)(Algorithms);
