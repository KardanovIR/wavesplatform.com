import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Link from 'src/common/components/Link';
import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import Image1 from '!svg-react-loader!./img/start_leasing_download_client.svg';
import Image2 from '!svg-react-loader!./img/start_leasing_deposit_waves.svg';
import Image3 from '!svg-react-loader!./img/start_leasing_choose_node.svg';
import Image4 from '!svg-react-loader!./img/start_leasing_done_leasing.svg';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';
import styles from './styles';

const StartLeasing = ({ classes }) => (
    <div>
        <SectionTitleText
            title={
                <FormattedMessage
                    id="leasing.startLeasing.title"
                    defaultMessage="Start leasing your funds"
                />
            }
            text={
                <FormattedMessage
                    id="leasing.startLeasing.text"
                    defaultMessage="You can lease any sum from 0.002 WAVES. Your funds remain in your wallet and you can cancel the lease and regain access to the WAVES at any time, with just two clicks. You can also set up your own node and start {miningLink} yourself if you have at least 10,000 WAVES."
                    values={{
                        miningLink: (
                            <Link href={url('mining')}>
                                <FormattedMessage
                                    id="leasing.startLeasing.miningLink"
                                    defaultMessage="mining"
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
                    <Image1 />
                    <div className={classes.arrow} />
                    <div className={classes.arrowMobile} />
                </div>
                <Margin bottom={1} />
                <Typography
                    tagName="div"
                    align="center"
                    className={classes.message}
                >
                    <FormattedMessage
                        id="leasing.startLeasing.p1.title"
                        defaultMessage="1. Download Waves Client"
                    />
                </Typography>
                <Margin bottom={2} />
                <Button
                    target="_blank"
                    href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                >
                    <FormattedMessage
                        id="cta.getClient"
                        defaultMessage="Get Client"
                    />
                </Button>
                <Margin bottom={5} />
            </Col>

            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <Image2 />
                    <div className={classes.arrow} />
                    <div className={classes.arrowMobile} />
                </div>
                <Margin bottom={1} />
                <Typography
                    tagName="div"
                    align="center"
                    className={classes.message}
                >
                    <FormattedMessage
                        id="leasing.startLeasing.p2.title"
                        defaultMessage="2. Deposit WAVES to your account"
                    />
                </Typography>
                <Margin bottom={2} />
                <Button
                    href={url('get-waves')}
                    withLoader
                    secondary
                >
                    <FormattedMessage
                        id="cta.getWaves"
                        defaultMessage="Get Waves"
                    />
                </Button>
                <Margin bottom={5} />
            </Col>

            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <Image3 />
                    <div className={classes.arrow} />
                    <div className={classes.arrowMobile} />
                </div>
                <Margin bottom={1} />
                <Typography
                    tagName="div"
                    align="center"
                    className={classes.message}
                >
                    <FormattedMessage
                        id="leasing.startLeasing.p3.title"
                        defaultMessage="3. Decide {nodesLink} to support with your WAVES. Paste the node’s address in the required field in the LEASING tab."
                        values={{nodesLink: <Link pseudo href="#nodes">which node</Link>    }}
                    />
                </Typography>                
                <Margin bottom={5} />
            </Col>

            <Col xs={12} sm={6} lg={3} className={classes.col}>
                <div className={classes.imageWrapper}>
                    <Image4 />
                </div>
                <Margin bottom={1} />
                <Typography
                    tagName="div"
                    align="center"
                    className={classes.message}
                >
                    <FormattedMessage
                        id="leasing.startLeasing.p4.title"
                        defaultMessage="4. You’re done! Your balance will now generate income without even leaving your wallet. Payments are usually transferred once a week."
                    />
                </Typography>
                <Margin bottom={2} />
            </Col>
        </Row>
    </div>
);

export default injectSheet(styles)(StartLeasing);
