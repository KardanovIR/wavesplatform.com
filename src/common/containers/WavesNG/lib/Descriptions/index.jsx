import React from 'react';

import { FormattedMessage } from 'react-intl';


import AlgorithmDesc from '../AlgorithmDesc';


import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
// import IconProduct from 'src/common/components/IconProduct';


import ImageNG from '!svg-react-loader!./img/ng.svg';
import ImageTraditional from '!svg-react-loader!./img/traditional.svg';




const Descriptions = () => (
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
                            id="wavesNG.descriptions.text"
                            defaultMessage="Waves-NG is a next-generation consensus algorithm, based on the Bitcoin-NG proposal made by Cornell Computer Science academics Emil Gün Sirer and Ittay Eyal."
                        />
                    </Typography>
                    <Margin bottom={4} />
                </Col>
            </Row>
        </Col>
        <Col xs={12} md={6}>
            <AlgorithmDesc
                title={
                    <FormattedMessage
                        id="wavesNG.descriptions.1.title"
                        defaultMessage="Traditional blockchain model"
                    />
                }
                image={<ImageNG />}
                text={
                    <FormattedMessage
                        id="wavesNG.descriptions.1.text"
                        defaultMessage="In a traditional blockchain model, blocks are discovered at roughly similar intervals and the most recent transactions are processed once a miner has earned the right to submit them to the network. This places fundamental limits on the capacity of the blockchain. Bitcoin, for example, has a theoretical maximum of roughly 3 tps."
                    />
                }
            />
        </Col>
        <Col xs={12} md={6}>
            <AlgorithmDesc
                title={
                    <FormattedMessage
                        id="wavesNG.descriptions.2.title"
                        defaultMessage="Traditional blockchain model"
                    />
                }
                image={<ImageTraditional />}
                text={
                    <FormattedMessage
                        id="wavesNG.descriptions.2.text"
                        defaultMessage="In a traditional blockchain model, blocks are discovered at roughly similar intervals and the most recent transactions are processed once a miner has earned the right to submit them to the network. This places fundamental limits on the capacity of the blockchain. Bitcoin, for example, has a theoretical maximum of roughly 3 tps."
                    />
                }
            >
                <Button>
                    <FormattedMessage
                        id="wavesNG.descriptions.2.fullDetails"
                        defaultMessage="Full Details"
                    />
                </Button>
            </AlgorithmDesc>
        </Col>
    </Row>

);


export default Descriptions;