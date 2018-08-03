import React from 'react';
import { connect } from 'react-redux';

import SectionTitleText from 'src/common/components/SectionTitleText';
import { Row } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';
import ContentContainer from 'src/common/components/ContentContainer';
import Typography from 'src/common/components/Typography';

import styles from './styles';

import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';

const WavesNodes = ({ classes, wavesTopNodes }) => {
  return wavesTopNodes && wavesTopNodes.length ? (
    <div>
      <Row>
        <ContentContainer>
          <SectionTitleText
            align="left"
            title={
              <Typography className={classes.title}>
                <FormattedMessage
                  id="leasing.nodes.title"
                  defaultMessage="Top Waves nodes"
                />
              </Typography>
            }
            text={
              <Typography className={classes.text}>
                <FormattedMessage
                  id="leasing.nodes.text"
                  defaultMessage="Here you can find a list of the top nodes by WAVES balance. You can find a full list at {pywavesLink}"
                  values={{
                    pywavesLink: (
                      <Link
                        href="https://forum.wavesplatform.com/c/pools"
                        target="_blank"
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
      </Row>
    </div>
  ) : null;
};

export default connect(({ wavesTopNodes }) => ({ wavesTopNodes }))(
  injectSheet(styles)(WavesNodes)
);
