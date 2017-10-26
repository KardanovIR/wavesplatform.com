import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const WavesNodesMap = ({ classes }) => (
    <div>
        <SectionTitleText
            title={
                <FormattedMessage
                    id="mining.wavesNodesMap.title"
                    defaultMessage="Waves nodes"
                />
            }
            text={
                <FormattedMessage
                    id="mining.wavesNodesMap.text"
                    defaultMessage="Nodes are a critical part of our ecosystem. Run a Waves node, help process transactions, ask the community to lease their WAVES to you and get paid for securing the network!"
                />
            }
            marginSize={3}
        />

        <div className={classes.numbersWrapper}>
            <div className={classes.number}>
                <Typography type="numeral" tagName="span">
                    168{' '}
                </Typography>
                <Typography type="body" tagName="span">
                    <FormattedMessage
                        id="mining.wavesNodesMap.nodes"
                        defaultMessage=" nodes"
                    />
                </Typography>
            </div>
            <div className={classes.number}>
                <Typography type="numeral" tagName="span">
                    23{' '}
                </Typography>
                <Typography type="body" tagName="span">
                    <FormattedMessage
                        id="mining.wavesNodesMap.countries"
                        defaultMessage=" countries"
                    />
                </Typography>
            </div>
        </div>
        <Margin />
        <Row centered>
            <Col xs={12} sm={10}>
                <div className={classes.map} />
            </Col>
        </Row>
    </div>
);

export default injectSheet(styles)(WavesNodesMap);
