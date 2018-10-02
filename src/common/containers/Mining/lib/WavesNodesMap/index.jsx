import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const WavesNodesMap = ({ classes }) => (
    <div>
        <ContentContainer>
            <SectionTitleText
                align="left"
                title={
                    <Typography className={classes.title} inverted>
                        <FormattedMessage
                            id="mining.wavesNodesMap.title"
                            defaultMessage="Waves nodes"
                        />
                    </Typography>
                }
                text={
                    <Typography className={classes.text} inverted>
                        <FormattedMessage
                            id="mining.wavesNodesMap.text"
                            defaultMessage="Nodes are a critical part of our ecosystem. Run a Waves node, help process transactions, ask the community to lease their WAVES to you and get paid for securing the network!"
                        />
                    </Typography>
                }
                marginSize={3}
            />

            <div className={classes.numbersWrapper}>
                <div className={classes.number}>
                    <Typography type="numeral" tagName="span" className={classes.Int} inverted>
                        300{' '}
                    </Typography>
                    <Typography type="body" tagName="span" className={classes.title} inverted>
                        <FormattedMessage
                            id="mining.wavesNodesMap.nodes"
                            defaultMessage=" nodes"
                        />
                    </Typography>
                </div>
                <div className={classes.number}>
                    <Typography type="numeral" tagName="span" className={classes.Int} inverted>
                        23{' '}
                    </Typography>
                    <Typography type="body" className={classes.title} tagName="span" inverted>
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
        </ContentContainer>
    </div>
);

export default injectSheet(styles)(WavesNodesMap);
