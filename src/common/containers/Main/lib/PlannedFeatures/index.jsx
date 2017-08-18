import React from 'react';


import Typography from 'src/common/components/Typography';
import Icon from './Icon';
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
                    avatar={<Icon name="ux" />}
                    text="New UX & UI"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<Icon name="dex" />}
                    text="Expanded statistics on released tokens"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<Icon name="mess" />}
                    text="Blockchain messenger"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<Icon name="multi" />}
                    text="Multisignature"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<Icon name="smart" />}
                    text="Smart contracts"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    centered
                    avatar={<Icon name="fiat" />}
                    text="New fiat and cryptocurrency gateways"
                />
            </ColFeature>
        </Row>
    </div>
);


export default injectSheet(styles)(PlannedFeatures);