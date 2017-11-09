import React from 'react';
import { connect } from 'react-redux';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Quote from 'src/common/components/Quote';
import Link from 'src/common/components/Link';
import Divider from 'src/common/components/Divider';
import Hidden from 'src/common/components/Hidden';

import Node from './lib/Node';

import { FormattedMessage } from 'react-intl';

const WavesNodes = ({ wavesTopNodes }) => {
    return wavesTopNodes && wavesTopNodes.length ? (
        <div>
            <SectionTitleText
                title={
                    <FormattedMessage
                        id="leasing.nodes.title"
                        defaultMessage="Top Waves nodes"
                    />
                }
                text={
                    <FormattedMessage
                        id="leasing.nodes.text"
                        defaultMessage="Here you can find a list of the top nodes by WAVES balance. You can find a full list at {pywavesLink}"
                        values={{
                            pywavesLink: (
                                <Link>
                                    <FormattedMessage
                                        id="mining.nodes.link"
                                        defaultMessage="dev.pywaves.org"
                                        values={{
                                            pywavesLink: (
                                                <Link>dev.pywaves.org</Link>
                                            ),
                                        }}
                                    />
                                </Link>
                            ),
                        }}
                    />
                }
            />

            <Row>
                {wavesTopNodes.map((node, i) => (
                    <Col xs={12} sm={6} lg={4} key={`node_${i}`}>
                        <Hidden only={i === wavesTopNodes.length - 1 ? ['sm', 'md'] : undefined}>
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
