import React from 'react';

import Margin from 'src/common/components/Margin';
import Hidden from 'src/common/components/Hidden';
import SectionTitleText from 'src/common/components/SectionTitleText';
import { Row, Col } from 'src/common/components/Grid';

import Card from './lib/Card';

import ImagePoS from '!svg-react-loader!./img/pos.svg';
import ImagePoSMobile from '!svg-react-loader!./img/pos-mobile.svg';
import ImagePoW from '!svg-react-loader!./img/pow.svg';
import ImagePoWMobile from '!svg-react-loader!./img/pow-mobile.svg';

import { FormattedMessage } from 'react-intl';

const Algorithms = () => (
    <div>
        <SectionTitleText
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
        <Row>
            <Col xs={12} sm={6}>
                <Card
                    title={
                        <FormattedMessage
                            id="mining.algorithms.pow.title"
                            defaultMessage="Proof-of-work"
                        />
                    }
                    imageMobile={<ImagePoWMobile />}
                    image={<ImagePoW />}
                    text={
                        <FormattedMessage
                            id="mining.algorithms.pow.text"
                            defaultMessage="Mining cryptocurrencies often requires expensive hardware, specialist knowledge and hours of dedicated work and patience. That’s because most cryptocurrencies are mined through Proof-of-Work. "
                        />
                    }
                />
                <Margin bottom={4} xsOnly />
            </Col>
            <Col xs={12} sm={6}>
                <Card
                    title={
                        <FormattedMessage
                            id="mining.algorithms.pos.title"
                            defaultMessage="Proof-of-stake"
                        />
                    }
                    imageMobile={<ImagePoSMobile />}
                    image={<ImagePoS />}
                    text={
                        <FormattedMessage
                            id="mining.algorithms.pos.text"
                            defaultMessage="Waves use a Proof-of-Stake algorithm in which the WAVES you own (or that have been leased to you) reflect your mining power. The more you own, the higher your chances of processing the next block and receiving the transaction fees as a reward. Essentially it’s a form of interest on your balance."
                        />
                    }
                />
                <Margin bottom={4} xsOnly />
            </Col>
        </Row>
    </div>
);

export default Algorithms;
