import React from 'react';


import Typography from 'src/common/components/Typography';
import AvatarWithText from 'src/common/components/AvatarWithText';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';



const ColFeature = ({ children, className }) =>
    <Col xs={12} md={3} lg className={className}>{children}</Col>;


const PlannedFeatures = ({ classes }) => (
    <div className={classes.root}>
        <Typography type="display3" className={classes.title}>
            Planned features
            </Typography>
        <Row>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="New UX & UI"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="Expanded statistics on released tokens"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="Blockchain messenger"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="Multisignature"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="Smart contracts"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="New fiat and cryptocurrency gateways"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<div style={{ background: 'lightcyan', height: '100%' }} />}
                    text="Tokenomica platform"
                />
            </ColFeature>
        </Row>
    </div>
);


export default injectSheet(styles)(PlannedFeatures);