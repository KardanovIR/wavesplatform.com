import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import Link from 'src/common/components/Link';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import url from 'src/common/utils/url';

const Interest = ({ classes }) => (
    <div>
        <Row centered>
            <Col xs={12} md={6}>
                <Typography type="display2" align="center">
                    <FormattedMessage
                        id="product.interest.title"
                        defaultMessage="Get interest on your WAVES account balance"
                    />
                </Typography>
                <Margin bottom={5} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} className={classes.column}>
                <Panel className={classes.panel}>
                    <div className={classes.panelTitle}>
                        <div className={classes.icon}>
                            <IconProduct name="leasing" />
                        </div>

                        <Typography type="display1">
                            <FormattedMessage
                                id="product.interest.leasing.title"
                                defaultMessage="Leasing"
                            />
                        </Typography>
                    </div>
                    <Margin />
                    <Typography type="body">
                        <FormattedMessage
                            id="product.interest.leasing.text"
                            defaultMessage="Any sum of WAVES can be leased to miners to generate interest. You can cancel a lease at any time with just two clicks."
                        />
                    </Typography>

                    <Typography type="body">
                        <Link href={url('leasing')}>
                            <FormattedMessage
                                id="product.interest.link"
                                defaultMessage="Learn more"
                            />
                        </Link>
                    </Typography>
                </Panel>
            </Col>

            <Col xs={12} md={6} className={classes.column}>
                <Panel className={classes.panel}>
                    <div className={classes.panelTitle}>
                        <div className={classes.icon}>
                            <IconProduct name="mining" />
                        </div>
                        <Typography type="display1">
                                <FormattedMessage
                                    id="product.interest.mining.title"
                                    defaultMessage="Mining"
                                />
                        </Typography>
                    </div>
                    <Margin />
                    <Typography type="body">
                        <FormattedMessage
                            id="product.interest.mining.text"
                            defaultMessage="Waves uses a proof-of-stake algorithm. To start mining, all you need to do is to download and launch the node, and have 10,000 WAVES in your wallet."
                        />
                    </Typography>

                    <Typography type="body">
                        <Link href={url('mining')}>
                            <FormattedMessage
                                id="product.interest.link"
                                defaultMessage="Learn more"
                            />
                        </Link>
                    </Typography>
                </Panel>
            </Col>
        </Row>
    </div>
);

export default injectSheet(styles)(Interest);
