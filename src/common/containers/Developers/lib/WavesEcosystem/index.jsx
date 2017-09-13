import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';


import Resource from './lib/Resource';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';



const styles = theme => ({
    text: {
        textAlign: 'center'
    },
    resourceColumn: {
        display: 'flex',
        marginBottom: theme.spacing.unit * 2
    },
    [theme.mixins.atMedia('md')]: {
        resourceColumn: {
            marginBottom: 0
        },
    }
})


const WavesEcosystem = ({ classes }) => (
    <div>
        <Row className={classes.text} centered>
            <Col xs={12} sm={8} md={8} lg={6}>
                <Typography type="display2">
                    <FormattedMessage
                        id="developers.wavesEcosystem.title"
                        defaultMessage="Waves Ecosystem"
                    />
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>
        <Row style={{ alignItems: 'stretch' }}>
            <Col xs={12} sm={4} className={classes.resourceColumn}>
                <Resource
                    iconName="list"
                    title={
                        <FormattedMessage
                            id="developers.wavesEcosystem.explorer"
                            defaultMessage="Function-rich blockchain explorer"
                        />
                    }
                    resource="wavesgo.com"
                    href="https://wavesgo.com"
                />
            </Col>
            <Col xs={12} sm={4} className={classes.resourceColumn}>
                <Resource
                    iconName="message"
                    title={
                        <FormattedMessage
                            id="developers.wavesEcosystem.forum"
                            defaultMessage="Waves forum"
                        />
                    }
                    resource="wavestalk.org"
                    href="https://wavestalk.org"
                />
                <Margin bottom={3} />
            </Col>
            <Col xs={12} sm={4} className={classes.resourceColumn}>
                <Resource
                    iconName="script"
                    title={
                        <FormattedMessage
                            id="developers.wavesEcosystem.pywaves"
                            defaultMessage="Python API client and useful scripts"
                        />
                    }
                    resource="github.com/PyWaves"
                    href="https://github.com/PyWaves"
                />
                <Margin bottom={3} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(WavesEcosystem);