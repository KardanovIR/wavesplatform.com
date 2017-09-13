import React from 'react';


import Typography from 'src/common/components/Typography';
import IconProduct from 'src/common/components/IconProduct';
import AvatarWithText from 'src/common/components/AvatarWithText';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';



const ColFeature = ({ children, className }) =>
    <Col xs={12} md={3} lg className={className}>{children}</Col>;


const PlannedFeatures = ({ classes }) => (
    <div className={classes.root}>
        <Typography type="display3" className={classes.title}>
            <FormattedMessage
                id="home.plannedFeatures.title"
                defaultMessage="Planned Features"
            />
        </Typography>
        <Row>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<IconProduct name="product" circle />}
                    text={
                        <FormattedMessage
                            id="home.plannedFeatures.newUX"
                            defaultMessage="New UX & UI"
                        />
                    }
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<IconProduct name="dex" circle />}
                    text={
                        <FormattedMessage
                            id="home.plannedFeatures.statistics"
                            defaultMessage="Expanded statistics on released tokens"
                        />
                    }
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<IconProduct name="message" circle />}
                    text={
                        <FormattedMessage
                            id="home.plannedFeatures.messenger"
                            defaultMessage="Blockchain messenger"
                        />
                    }
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<IconProduct name="fingerprint" circle />}
                    text={
                        <FormattedMessage
                            id="home.plannedFeatures.multisignature"
                            defaultMessage="Multisignature"
                        />
                    }
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<IconProduct name="document" circle />}
                    text={
                        <FormattedMessage
                            id="home.plannedFeatures.smartContracts"
                            defaultMessage="Smart contracts"
                        />
                    }
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<IconProduct name="money" circle />}
                    text={
                        <FormattedMessage
                            id="home.plannedFeatures.gateways"
                            defaultMessage="New fiat and cryptocurrency gateways"
                        />
                    }
                />
            </ColFeature>
        </Row>
    </div>
);


export default injectSheet(styles)(PlannedFeatures);