import React from 'react';

import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
// import Link from 'src/common/components/Link';
import Panel from 'src/common/components/Panel';
import Divider from 'src/common/components/Divider';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';
const styles = ({ palette, spacing }) => ({
    spaced: {
        margin: [spacing.unit, 0],
    },

    chartOuter: {
        width: '100%',
        height: spacing.unit * 8,
        position: 'relative',
        background: palette.orange[300],
    },
    chartInner: {
        position: 'absolute',
        background: '#ED6B60',
        height: '100%',
        top: 0,
        left: 0,
        width: ({ share }) => `${share}%`,
    },
});

const Node = ({ name, balance, share, classes, address }) => (
    <Panel>
        <Typography type="display2">{name}</Typography>
        <Margin />

        <Divider />

        <div className={classes.spaced}>
            <Row>
                <Col xs>
                    <Typography type="body">
                        <FormattedMessage
                            id="balance"
                            defaultMessage="Balance"
                        />
                    </Typography>
                </Col>

                <Col xs>
                    <Typography type="body" align="right">
                        <FormattedNumber
                            value={balance}
                            maximumFractionDigits={0}
                        />{' '}
                        WAVES
                    </Typography>
                </Col>
            </Row>
        </div>

        <Divider />

        <Margin bottom={2} />

        <div className={classes.chartOuter}>
            <div className={classes.chartInner} />
        </div>

        <Margin bottom={1} />

        <Row>
            <Col xs>
                <Typography type="body">
                    <FormattedMessage
                        id="mining.nodes.share"
                        defaultMessage="Share"
                    />
                </Typography>
            </Col>

            <Col xs>
                <Typography type="body" align="right">
                    <FormattedNumber value={share} /> %
                </Typography>
            </Col>
        </Row>

        <Margin top={1} bottom={2}>
            <Divider />
        </Margin>

        <Typography type="body">
            <FormattedMessage
                id="mining.nodes.copyAddress"
                defaultMessage="Coly leasing address"
            />
        </Typography>
        <Typography type="body">{address}</Typography>
    </Panel>
);

export default injectSheet(styles)(Node);
