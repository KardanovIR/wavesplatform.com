import React from 'react';

// components
import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import AvatarTitle from 'src/common/components/AvatarTitle';
import IconProduct from 'src/common/components/IconProduct';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

// containers
import Calculator from 'src/common/containers/CalculatorRevenue';

import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';
import styles from './styles';
const IncorrectAmountText = ({ min }) => (
  <Typography type="body">
    <FormattedMessage
      id="calcRevenue.incorrectAmount.mining"
      values={{ min }}
    />
  </Typography>
);

const StartMining = ({ classes }) => (
  <div>
    <ContentContainer>
      <SectionTitleText
        align="left"
        titleType="display1"
        titleWeight={600}
        title={
          <FormattedMessage
            id="mining.revenue.title"
            defaultMessage="Revenues"
          />
        }
        text={
          <FormattedMessage
            id="mining.revenue.text"
            defaultMessage="By supporting the Waves network, you can earn up to 5% per year on your balance."
          />
        }
      />
      <Margin bottom={6} />
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div>
            <AvatarTitle
              avatar={<IconProduct name="fees" />}
              title={
                <FormattedMessage
                  id="mining.revenue.p1.title"
                  defaultMessage="How much will my node earn?"
                />
              }
            />
            <Margin bottom={2} />
            <Margin bottom={1} xsOnly />
            <Typography type="body" cut>
              <FormattedMessage
                id="mining.revenue.p1.text1"
                defaultMessage="Since rewards across the entire network are distributed proportionately, the more WAVES you hold in your node, the greater share of blockchain transaction fees you will receive. The final amount will also depend on overall network activity and the level of fees generated."
              />
            </Typography>
            <Typography type="body" cut>
              <FormattedMessage
                id="mining.revenue.p1.text2"
                defaultMessage="In addition to any WAVES they receive, nodes will receive 60 MRT per block for the first 70 blocks they generate per day, with 30 MRT per block awarded thereafter."
              />
            </Typography>
            <Margin bottom={6} />
          </div>
        </Col>

        <Col xs={12} sm={6} md={6}>
          <div>
            <AvatarTitle
              avatar={<IconProduct name="mining" />}
              title={
                <FormattedMessage
                  id="mining.revenue.p2.title"
                  defaultMessage="What is MRT?"
                />
              }
            />
            <Margin bottom={2} />
            <Margin bottom={1} xsOnly />
            <Typography type="body" cut>
              <FormattedMessage
                id="mining.revenue.p2.text1"
                defaultMessage="Miners Reward Token (MRT) is a bonus token that is distributed to miners with every block created. MRT is intended to be used as a means for new token issuers to reward nodes for processing their transactions, paying fees in their own token."
              />
            </Typography>
            <Typography type="body" cut>
              <FormattedMessage
                id="mining.revenue.p2.text2"
                defaultMessage="As a Waves token, MRT can be transferred and traded freely on Waves’ decentralised exchange (DEX)."
              />
            </Typography>
            <Margin bottom={6} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Typography className={classes.titleTwo}>
            <FormattedMessage
              id="mining.revenue.calc.title"
              defaultMessage="Calculate the reward"
            />
          </Typography>
          <Margin bottom={2} />
        </Col>
      </Row>
      <Row>
        <Col className={classes.calculator} xs={12} md={9}>
          <Calculator
            minWaves={'1000'}
            IncorrectAmountText={IncorrectAmountText}
          />
        </Col>
        <Col xs={12} md={3}>
          <Typography type="quote" tagName="div">
            <FormattedMessage
              id="mining.revenue.calc.description"
              defaultMessage="You can use this tool to calculate how much you can make by mining WAVES, but be aware that results will vary each week."
            />
          </Typography>
          <Margin bottom={4} />
        </Col>
      </Row>
    </ContentContainer>
  </div>
);

export default injectSheet(styles)(StartMining);
