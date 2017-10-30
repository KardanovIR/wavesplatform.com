import React from 'react';

// components
import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import AvatarTitle from 'src/common/components/AvatarTitle';
import IconProduct from 'src/common/components/IconProduct';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

// containers
import Calculator from 'src/common/containers/CalculatorRevenue';

import { FormattedMessage } from 'react-intl';

const StartMining = () => (
    <div>
        <SectionTitleText
            title={
                <FormattedMessage
                    id="mining.revenue.title"
                    defaultMessage="Revenues"
                />
            }
            text={
                <FormattedMessage
                    id="mining.revenue.text"
                    defaultMessage="By supporting the Waves network, you can earn up to 1% per month on your balance."
                />
            }
        />

        <Row>
            <Col xs={12} sm={6}>
                <AvatarTitle
                    avatar={<IconProduct name="leasing" />}
                    title={
                        <FormattedMessage
                            id="mining.revenue.p1.title"
                            defaultMessage="How much will my node earn?"
                        />
                    }
                />
                <Margin bottom={2} />
                <Typography type="body" cut>
                    <FormattedMessage
                        id="mining.revenue.p1.text1"
                        defaultMessage="Since rewards across the entire network are distributed proportionately, the more WAVES you hold in your node, the greater share of blockchain transaction fees you will receive. The final amount will also depend on overall network activity and the level of fees generated."
                    />
                </Typography>
                <Typography type="body" cut>
                    <FormattedMessage
                        id="mining.revenue.p1.text2"
                        defaultMessage="In addition to any WAVES they receive, nodes will receives 10 MRT per block they generate, though not more than 700 MRT per day."
                    />
                </Typography>
            </Col>

            <Col xs={12} sm={6}>
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
            </Col>
        </Row>

        <Margin bottom={5} />

        <Typography type="display2" tagName="div">
            <FormattedMessage
                id="mining.revenue.calc.title"
                defaultMessage="Calculate the reward"
            />
        </Typography>

        <Margin bottom={3} />

        <Row>
            <Col xs={12} md={9}>
                <Calculator minWaves={10000} />
            </Col>

            <Col xs={12} md={3}>
                <Margin top={4}>
                    <Typography type="quote" tagName="div">
                        <FormattedMessage
                            id="mining.revenue.calc.description"
                            defaultMessage="You can use this tool to calculate how much you can make by mining WAVES, but be aware that results will vary each week."
                        />
                    </Typography>
                    <Margin bottom={3} />
                    Здесь будет график
                </Margin>
            </Col>
        </Row>
    </div>
);

export default StartMining;
