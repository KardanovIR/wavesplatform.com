import React from 'react';

// components
import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import AvatarTitle from 'src/common/components/AvatarTitle';
import IconProduct from 'src/common/components/IconProduct';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

// containers
import Calculator from 'src/common/containers/CalculatorRevenue';

import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';
import styles from './styles';

const StartMining = ({classes}) => (
    <div>
        <Row>
            <ContentContainer>
                <SectionTitleText
                    align="left"
                    title={
                        <Typography className={classes.title}>
                            <FormattedMessage
                                id="mining.revenue.title"
                                defaultMessage="Revenues"
                            />
                        </Typography>
                    }
                    text={
                        <Typography className={classes.text}>
                            <FormattedMessage
                                id="mining.revenue.text"
                                defaultMessage="By supporting the Waves network, you can earn up to 5% per year on your balance."
                            />
                        </Typography>
                    }
                />
            </ContentContainer>
        </Row>

        <Row>
            <ContentContainer className={classes.cards}>
                <div>
                    <Margin bottom={4} xsOnly>
                        <AvatarTitle
                            avatar={<IconProduct name="leasing" />}
                            title={
                                <FormattedMessage
                                    id="leasing.revenue.p1.title"
                                    defaultMessage="How much can I earn?"
                                />
                            }
                        />
                        <Margin bottom={2} />
                        <Typography type="body" cut>
                            <FormattedMessage
                                id="leasing.revenue.p1.text1"
                                defaultMessage="The more WAVES you lease to a node, the more rewards you will receive. Nodes pay out different proportions of the transaction fees and MRT they receive, and some also use their own tokens as rewards. Check the list of Waves {nodesLink} and select the one with the best conditions for you!"
                                values={{
                                    nodesLink: (
                                        <Link pseudo href="#nodes">
                                            <FormattedMessage
                                                id="leasing.revenue.p1.text1.link"
                                                defaultMessage="nodes"
                                            />
                                        </Link>
                                    ),
                                }}
                            />
                        </Typography>
                        <Typography type="body" cut>
                            <FormattedMessage
                                id="leasing.revenue.p1.text2"
                                defaultMessage="You can think of leasing your WAVES as a little like depositing money in a bank account. You receive income from them but can still withdraw them at any time."
                            />
                        </Typography>
                    </Margin>
                </div>
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
                </div>
            </ContentContainer>
        </Row>

        <Margin bottom={5} />
        <ContentContainer>
            <Row>
                <Col xs={12}>
                    <Typography type="display2" tagName="div">
                        <FormattedMessage
                            id="mining.revenue.calc.title"
                            defaultMessage="Calculate the reward"
                        />
                    </Typography>
                </Col>
            </Row>
            <Margin bottom={1} />

            <Row>

                <Col className={classes.calculator} xs={12} md={9}>
                    <Calculator minWaves={1} initialValue={1000} />
                </Col>


                <Col xs={12} md={3}>
                    <Typography type="quote" tagName="div">
                        <FormattedMessage
                            id="leasing.revenue.calc.description"
                            defaultMessage="You can use this tool to calculate how much you can make leasing WAVES, but be aware that results will vary each week."
                        />
                    </Typography>
                </Col>
            </Row>
        </ContentContainer>
    </div>
);

export default injectSheet(styles)(StartMining);
