import React from 'react';
import { connect } from 'react-redux';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Quote from 'src/common/components/Quote';
import Link from 'src/common/components/Link';
import Divider from 'src/common/components/Divider';
import ContentContainer from 'src/common/components/ContentContainer';
import injectSheet from 'react-jss';

import Node from './lib/Node';
import styles from './styles';

import { FormattedMessage } from 'react-intl';

const WavesNodes = ({ classes, wavesTopNodes }) => {
  const wavesGo = wavesTopNodes.find(v => v.name === 'WavesGo');
  const WavesNodeNet = wavesTopNodes.find(v => v.name === 'Wavesnode.net');

  return wavesGo && WavesNodeNet ? (
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
            <Typography className={classes.text}>
              <FormattedMessage
                id="mining.nodes.text"
                defaultMessage="A Waves node isn’t just a way to get paid for securing the network. These are hubs of activity around which entrepreneurs build new businesses and engage the community. You can find a list of Waves nodes at {pywavesLink}"
                values={{
                  pywavesLink: (
                    <Link
                      href="http://dev.pywaves.org/generators-weekly/"
                      target="_blank"
                    >
                      dev.pywaves.org
                    </Link>
                  ),
                }}
              />
            </Typography>
          }
        />
        <Margin top={6}>
          {/* WAVESGO */}
          <Row>
            <Col xs={12} sm={6} md={6} lg={5}>
              <Node {...wavesGo} />
              <Margin bottom={3} xsOnly />
            </Col>

            <Col xs={12} sm={6} md={6} lgOffset={1} lg={6}>
              <Typography type="display1" className={classes.titleText}>
                <FormattedMessage
                  id="mining.nodes.node1.title"
                  defaultMessage="WavesGo is the foremost Waves node, with the biggest balance and a thriving community of supporters. The node distributes the WavesGo token to anyone who leases their funds to it."
                />
              </Typography>

              <Margin />

              <Quote
                signature={
                  <FormattedMessage
                    id="mining.nodes.node1.signature"
                    defaultMessage="WavesGo Team"
                  />
                }
              >
                <FormattedMessage
                  id="mining.nodes.node1.quote"
                  defaultMessage="WavesGo’s mission is to make blockchain accessible to the masses. This ideal is reflected in our different services. First and foremost, we are proud to run Waves’ largest mining pool, to which hundreds of community members have already leased their stakes. We maintain and develop the officially endorsed, feature-rich blockchain explorer at WavesGo. com, which is visited by thousands of users every single day. We also have more services and products in the pipeline, all of which serve one major goal — to expand the thriving ecosystem around the Waves Platform. WavesGo is more than proud to be able to support Waves in such a meaningful way."
                />
              </Quote>
            </Col>
          </Row>

          <Margin top={4} bottom={4}>
            <Divider gradient />
          </Margin>

          {/* Wavesnodes */}
          <Row>
              <Col xs={12} sm={6} md={6} lg={5}>
                <Node {...WavesNodeNet} />
                <Margin bottom={3} xsOnly />
              </Col>
              <Col xs={12} sm={6} md={6} lgOffset={1} lg={6}>
                <Typography type="display1">
                  <FormattedMessage
                    id="mining.nodes.node2.title"
                    defaultMessage="Wavesnode.NET represents a developing community in Holland. The node accepts multiple tokens for fees and has a growing list of supporters — as well as offering unique Waves merchandise!"
                  />
                </Typography>

                <Margin />

                <Quote
                  signature={
                    <FormattedMessage
                      id="mining.nodes.node2.signature"
                      defaultMessage="Wavesnode.NET Team"
                    />
                  }
                >
                  <FormattedMessage
                    id="mining.nodes.node2.quote"
                    defaultMessage="Running our fullnode since the start of the platform gave us a thorough knowledge about the Wavesplatform and we are also providing 30+ years combined experience in IT and 7+ years in Crypto. We have a lot to offer with our Wavesnode.NET fullnode for starting projects on the Wavesplatform and are proud owners of the first shop accepting payments in a Waves asset. With our services we are taking technical work out of our clients hands and providing them a trustfull partner to work with at the Wavesplatform. Clients will have their peace of mind, letting Wavesnode.NET handle all the technical work needed. We can assist clients step by step in the process and provide strategic advice on how to move forward with their projects. All our services to be bought with our WNET token."
                  />
                </Quote>
              </Col>
          </Row>
        </Margin>
      </ContentContainer>
    </div>
  ) : null;
};

export default connect(({ wavesTopNodes }) => ({ wavesTopNodes }))(
  injectSheet(styles)(WavesNodes)
);
