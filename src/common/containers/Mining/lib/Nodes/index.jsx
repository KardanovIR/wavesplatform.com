import React from 'react';

import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
import ContentContainer from 'src/common/components/ContentContainer';
import injectSheet from 'react-jss';

import styles from './styles';

import { FormattedMessage } from 'react-intl';

const WavesNodes = ({ classes }) => {
  return (
    <div>
      <ContentContainer>
        <SectionTitleText
          align="left"
          title={
            <Typography className={classes.title}>
              <FormattedMessage
                id="mining.nodes.title"
                defaultMessage="A focus for the community"
              />
            </Typography>
          }
          text={
            <Typography type="display3">
              <FormattedMessage
                id="mining.nodes.text"
                defaultMessage="A Waves node isn’t just a way to get paid for securing the network. These are hubs of activity around which entrepreneurs build new businesses and engage the community. You can find a list of Waves nodes at {pywavesLink}"
                values={{
                  pywavesLink: (
                    <Link
                      href="https://forum.wavesplatform.com/c/pools"
                      target="_blank"
                      className={classes.forumLink}
                    >
                      https://forum.wavesplatform.com/c/pools
                    </Link>
                  ),
                }}
              />
            </Typography>
          }
        />
      </ContentContainer>
    </div>
  );
};

export default injectSheet(styles)(WavesNodes);
