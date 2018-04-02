import React from 'react';

import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';
import StartMiningArrow from '!svg-react-loader!./img/start_mining_arrow.svg';

import Image1 from '!svg-react-loader!./img/start_leasing_download_client.svg';
import Image2 from '!svg-react-loader!./img/start_leasing_deposit_waves.svg';
import Image3 from '!svg-react-loader!./img/start_leasing_choose_node.svg';
import Image4 from '!svg-react-loader!./img/start_leasing_done_leasing.svg';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';
import styles from './styles';

const StartLeasing = ({ classes }) => {
  const Arrow = () => (
    <div className={classes.arrowDiv}>
      <StartMiningArrow />
    </div>
  );

  return (
    <div>
      <ContentContainer>
        <Row>
          <Col
            xs={12}
            sm={6}
            lg={6}
            className={[classes.col, classes.colMargin]}
          >
            <Typography type="display1" weight={600}>
              <FormattedMessage
                id="leasing.startLeasing.title"
                defaultMessage="Start leasing your funds"
              />
            </Typography>
            <Typography type="body2">
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
            </Typography>
            <Margin bottom={5} />
            <Button secondary target="_blank" href={url('online-client(beta)')}>
              <FormattedMessage
                id="cta.onlineClient"
                defaultMessage="Online client"
              />
            </Button>
          </Col>

          <Col xs={12} sm={6} lg={6} className={classes.col}>
            <div className={classes.flexCol}>
              <div className={classes.flexRow}>
                <div className={classes.imageWrapper}>
                  <Image1 />
                </div>
                <Typography
                  tagName="div"
                  align="left"
                  className={classes.message}
                >
                  <FormattedMessage
                    id="leasing.startLeasing.p1.title"
                    defaultMessage="1. Download Waves Client"
                  />
                </Typography>
              </div>
            </div>
            <Arrow />
            <div className={classes.flexCol}>
              <div className={classes.flexRow}>
                <div className={classes.imageWrapper}>
                  <Image2 />
                </div>
                <Typography
                  tagName="div"
                  align="left"
                  className={classes.message}
                >
                  <FormattedMessage
                    id="leasing.startLeasing.p2.title"
                    defaultMessage="2. Deposit WAVES to your account"
                  />
                </Typography>
              </div>
            </div>
            <Margin bottom={1} xsOnly />
            <Arrow />
            <Margin bottom={5} xsOnly />
            <div className={classes.flexCol}>
              <div className={classes.flexRow}>
                <div className={classes.imageWrapper}>
                  <Image3 />
                </div>
                <Typography
                  tagName="div"
                  align="left"
                  className={classes.message}
                >
                  <FormattedMessage
                    id="leasing.startLeasing.p3.title"
                    defaultMessage="3. Decide {nodesLink} to support with your WAVES. Paste the node’s address in the required field in the LEASING tab."
                    values={{
                      nodesLink: (
                        <Link pseudo href="#nodes">
                          <FormattedMessage
                            id="leasing.startLeasing.p3.nodesLink"
                            defaultMessage="which node"
                          />
                        </Link>
                      ),
                    }}
                  />
                </Typography>
              </div>
            </div>
            <Margin bottom={3} />
            <Arrow />
            <Margin bottom={5} xsOnly />
            <div className={classes.flexRow}>
              <div className={classes.imageWrapper}>
                <Image4 />
              </div>
              <Typography
                tagName="div"
                align="left"
                className={classes.message}
              >
                <FormattedMessage
                  id="leasing.startLeasing.p4.title"
                  defaultMessage="4. You’re done! Your balance will now generate income without even leaving your wallet. Payments are usually transferred once a week."
                />
              </Typography>
              <Margin bottom={2} />
            </div>
          </Col>
        </Row>
      </ContentContainer>
    </div>
  );
};

export default injectSheet(styles)(StartLeasing);
