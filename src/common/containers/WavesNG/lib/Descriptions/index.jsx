import React from 'react';

import { FormattedMessage } from 'react-intl';


import AlgorithmDesc from '../AlgorithmDesc';


import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';


import ImageNG from '!svg-react-loader!./img/ng.svg';
import ImageTraditional from '!svg-react-loader!./img/traditional.svg';



import injectSheet from 'react-jss';
const styles = ({ spacing }) => ({
    column: {
        paddingBottom: spacing.unit * 4
    }
})



const Descriptions = ({ classes }) => (
    <Row>
        <Col xs={12}>
            <Row centered>
                <Col xs={12} md={8}>
                    <Typography type="display3" align="center">
                        <FormattedMessage
                            id="wavesNG.descriptions.title"
                            defaultMessage="About Waves-NG"
                        />
                    </Typography>
                    <Typography type="body2" align="center">
                        <FormattedMessage
                            id="wavesNG.descriptions.text.p1"
                            defaultMessage="Waves-NG is a next-generation consensus algorithm, based on the Bitcoin-NG proposal made by Cornell Computer Science academics Emil Gün Sirer and Ittay Eyal."
                        />
                    </Typography>
                    <Typography type="body2" align="center">
                        <FormattedMessage
                            id="wavesNG.descriptions.text.p2"
                            defaultMessage="Bitcoin-NG was designed to address bitcoin’s scalability issues, increasing network throughput to hundreds of transactions per second. Waves-NG adapts this proposal to Waves’ proof-of-stake consensus, and is the first ever implementation of the protocol in a production blockchain system."
                        />
                        <Margin bottom={2} />
                        <Button
                            href="https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf"
                            target="_blank"
                        >
                            <FormattedMessage
                                id="wavesNG.descriptions.button"
                                defaultMessage="Bitcoin-NG whitepaper"
                            />
                        </Button>
                    </Typography>

                    <Margin bottom={4} />
                </Col>
            </Row>
        </Col>
        <Col xs={12} md={6} className={classes.column}>
            <AlgorithmDesc
                title={
                    <FormattedMessage
                        id="wavesNG.descriptions.1.title"
                        defaultMessage="Traditional blockchain model"
                    />
                }
                image={<ImageTraditional />}
                text={
                    <FormattedMessage
                        id="wavesNG.descriptions.1.text"
                        defaultMessage="In a traditional blockchain model, blocks are discovered at roughly similar intervals and the most recent transactions are processed once a miner has earned the right to submit them to the network. This places fundamental limits on the capacity of the blockchain. Bitcoin, for example, has a theoretical maximum of roughly 3 tps."
                    />
                }
            />
        </Col>
        <Col xs={12} md={6} className={classes.column}>
            <AlgorithmDesc
                title={
                    <FormattedMessage
                        id="wavesNG.descriptions.2.title"
                        defaultMessage="NG model"
                    />
                }
                image={<ImageNG />}
                text={
                    <FormattedMessage
                        id="wavesNG.descriptions.2.text"
                        defaultMessage="In the NG model, the next miner is selected in advance. The miner creates a ‘key block’, which is then immediately filled with microblocks containing transactions, which requires no further proof-of-work. Whilst maintaining the open structure of the protocol, this allows transactions to be confirmed as fast as the network will allow. Waves’ proof-of-stake approach further improves speed, increasing capacity by a factor of a hundred or more."
                    />
                }
            >
                <Button
                    target="_blank"
                    href="https://github.com/wavesplatform/Waves/wiki/Waves-NG-Protocol"
                >
                    <FormattedMessage
                        id="wavesNG.descriptions.2.fullDetails"
                        defaultMessage="Full Details"
                    />
                </Button>
            </AlgorithmDesc>
        </Col>
    </Row>

);


export default injectSheet(styles)(Descriptions);