import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Link from 'src/common/components/Link';
import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import { Row, Col } from 'src/common/components/Grid';

import ImageNode from '!svg-react-loader!./img/start_mining_node.svg';
import ImageInstall from '!svg-react-loader!./img/start_mining_install.svg';
import ImageConfigure from '!svg-react-loader!./img/start_mining_configure.svg';
import ImageDone from '!svg-react-loader!./img/start_mining_done_mining.svg';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';
import styles from './styles';

const StartMining = ({ classes }) => (
    <div>
        <SectionTitleText
            title={
                <FormattedMessage
                    id="mining.startMining.title"
                    
                />
            }
            text={
                <FormattedMessage
                    id="mining.startMining.text"
                    
                    values={{
                        leasingLink: (
                            <Link href={url('leasing')}>
                                <FormattedMessage
                                    id="mining.startMining.leasingLink"
                                    
                                />
                            </Link>
                        ),
                    }}
                />
            }
        />

        <Row>
            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <ImageNode />
                    <div className={classes.arrow} />
                    <div className={classes.arrowMobile} />
                </div>
                <Margin bottom={1} />
                <Typography tagName="div" align="center" className={classes.message}>
                    <FormattedMessage
                        id="mining.startMining.download.title"
                        
                    />
                </Typography>
                <Margin bottom={2} />

                <IconButton
                    href="https://github.com/wavesplatform/Waves"
                    target="_blank"
                    iconName="github"
                >
                    <FormattedMessage
                        id="developers.cta.wavesNode"
                        
                    />
                </IconButton>
                <Margin bottom={5} />
            </Col>

            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <ImageInstall />
                    <div className={classes.arrow} />
                    <div className={classes.arrowMobile} />
                </div>
                <Margin bottom={1} />
                <Typography tagName="div" align="center" className={classes.message}>
                    <FormattedMessage
                        id="mining.startMining.install.title"
                        
                    />
                </Typography>
                <Margin bottom={2} />
                <IconButton
                    href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
                    target="_blank"
                    iconName="github"
                    secondary
                >
                    <FormattedMessage
                        id="developers.cta.howToInstallNode"
                        
                    />
                </IconButton>
                <Margin bottom={5} />
            </Col>

            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <ImageConfigure />
                    <div className={classes.arrow} />
                    <div className={classes.arrowMobile} />
                </div>
                <Margin bottom={1} />
                <Typography tagName="div" align="center" className={classes.message}>
                    <FormattedMessage
                        id="mining.startMining.configure.title"
                        
                    />
                </Typography>
                <Margin bottom={2} />
                <IconButton
                    href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-configuration-file"
                    target="_blank"
                    iconName="github"
                    secondary
                >
                    <FormattedMessage
                        id="mining.startMining.configure.button"
                        
                    />
                </IconButton>
                <Margin bottom={5} />
            </Col>
            
            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <ImageDone />
                </div>
                <Margin bottom={1} />
                <Typography tagName="div" align="center" className={classes.message}>
                    <FormattedMessage
                        id="mining.startMining.done.title"
                        
                    />
                </Typography>
                <Margin bottom={2} />
            </Col>
        </Row>
    </div>
);

export default injectSheet(styles)(StartMining);
