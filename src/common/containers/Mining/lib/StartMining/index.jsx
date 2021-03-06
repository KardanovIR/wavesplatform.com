import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Link from 'src/common/components/Link';
import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

import ImageNode from '!svg-react-loader!./img/start_mining_node_new.svg';
import ImageInstall from '!svg-react-loader!./img/start_mining_install_new.svg';
import ImageConfigure from '!svg-react-loader!./img/start_mining_configure_new.svg';
import ImageDone from '!svg-react-loader!./img/start_mining_done_mining_new.svg';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';
import styles from './styles';
const confcol = {
  xs: 12,
  sm: 3,
  lg: 3,
};

const StartMining = ({ classes }) => (
  <div>
    <ContentContainer>
      <SectionTitleText
        align="left"
        titleType="display1"
        titleWeight={600}
        title={
          <FormattedMessage
            id="mining.startMining.title"
            defaultMessage="Start mining"
          />
        }
        text={
          <FormattedMessage
            id="mining.startMining.text"
            defaultMessage="You don’t need any fancy hardware — just a simple hosted server and at least 10,000 WAVES. You can also run a public mining pool and have users {leasingLink} their funds to you, thereby increasing your profits and sharing them with the community."
            values={{
              leasingLink: (
                <Link href={url('leasing')}>
                  <FormattedMessage
                    id="mining.startMining.leasingLink"
                    defaultMessage="lease"
                  />
                </Link>
              ),
            }}
          />
        }
      />

      <div className={classes.flexVers}>
        <Row>
          <Col {...confcol} className={[classes.col, classes.colBlock]}>
            <div className={classes.imageWrapper}>
              <ImageNode className={classes.image} />
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
                id="mining.startMining.download.title"
                defaultMessage="1. Download the Waves Node"
              />
            </Typography>
            <Margin bottom={5} />
            <IconButton
              href="https://github.com/wavesplatform/Waves"
              target="_blank"
              iconName="github"
              secondary
            >
              <FormattedMessage
                id="developers.cta.wavesNode"
                defaultMessage="Waves node"
              />
            </IconButton>
          </Col>

          <Col {...confcol} className={[classes.col, classes.colBlock]}>
            <div className={classes.imageWrapper}>
              <ImageInstall className={classes.image} />
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
                id="mining.startMining.install.title"
                defaultMessage="2. Install Node"
              />
            </Typography>
            <Margin bottom={5} />
            <IconButton
              href="https://docs.wavesplatform.com/waves-full-node/how-to-install-a-node/how-to-install-a-node.html"
              target="_blank"
              iconName="github"
            >
              <FormattedMessage
                id="developers.cta.howToInstallNode"
                defaultMessage="How to install"
              />
            </IconButton>
          </Col>

          <Col {...confcol} className={[classes.col, classes.colBlock]}>
            <div className={classes.imageWrapper}>
              <ImageConfigure className={classes.image} />
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
                id="mining.startMining.configure.title"
                defaultMessage="3. Configure Node"
              />
            </Typography>
            <Margin bottom={5} />
            <IconButton
              href="https://docs.wavesplatform.com/waves-full-node/how-to-configure-a-node.html"
              target="_blank"
              iconName="github"
            >
              <FormattedMessage
                id="mining.startMining.configure.button"
                defaultMessage="Configuration"
              />
            </IconButton>
          </Col>

          <Col
            {...confcol}
            className={[classes.col, classes.colBlock, classes.LastBlock]}
          >
            <div className={classes.imageWrapper}>
              <ImageDone className={classes.image} />
            </div>
            <Margin bottom={1} />
            <Typography
              tagName="div"
              align="center"
              className={classes.message}
            >
              <FormattedMessage
                id="mining.startMining.done.title"
                defaultMessage="4. Ready! Your node automatically starts mining."
              />
            </Typography>
            <Margin bottom={2} />
          </Col>
        </Row>
      </div>
    </ContentContainer>
  </div>
);

export default injectSheet(styles)(StartMining);
