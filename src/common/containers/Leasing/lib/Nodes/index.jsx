import React from 'react';
import { connect } from 'react-redux';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import { Row, Col } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';
import Hidden from 'src/common/components/Hidden';

import Node from './lib/Node';

import { FormattedMessage } from 'react-intl';

const WavesNodes = ({ wavesTopNodes }) => {
  return wavesTopNodes && wavesTopNodes.length ? (
    <div>
      <SectionTitleText
        title={<FormattedMessage id="leasing.nodes.title" />}
        text={
          <FormattedMessage
            id="leasing.nodes.text"
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
        }
      />

      <Row>
        {wavesTopNodes.map((node, i) => (
          <Col xs={12} sm={6} lg={4} key={`node_${i}`}>
            <Hidden
              only={i === wavesTopNodes.length - 1 ? ['sm', 'md'] : undefined}
            >
              <Node {...node} />
              <Margin bottom={3} />
            </Hidden>
          </Col>
        ))}
      </Row>
    </div>
  ) : null;
};

export default connect(({ wavesTopNodes }) => ({ wavesTopNodes }))(WavesNodes);
