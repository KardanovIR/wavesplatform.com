import React from 'react';
import { connect } from 'react-redux';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Quote from 'src/common/components/Quote';
import Link from 'src/common/components/Link';
import Divider from 'src/common/components/Divider';

import Node from './lib/Node';

import { FormattedMessage } from 'react-intl';

const WavesNodes = ({ wavesTopNodes }) => {
    const wavesGo = wavesTopNodes.find(v => v.name === 'WavesGo');
    const WavesNodeNet = wavesTopNodes.find(v => v.name === 'Wavesnode.net');

    return wavesGo && WavesNodeNet ? (
        <div>
            <SectionTitleText
                title={
                    <FormattedMessage
                        id="mining.nodes.title"
                        
                    />
                }
                text={
                    <FormattedMessage
                        id="mining.nodes.text"
                        
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

            {/* WAVESGO */}
            <Row>
                <Col xs={12} sm={6} lg={5}>
                    <Node {...wavesGo} />
                    <Margin bottom={3} xsOnly />
                </Col>
                <Col xs={12} sm={6} lgOffset={1} lg={6}>
                    <Typography type="display1">
                        <FormattedMessage
                            id="mining.nodes.node1.title"
                            
                        />
                    </Typography>

                    <Margin />

                    <Quote
                        signature={
                            <FormattedMessage
                                id="mining.nodes.node1.signature"
                                
                            />
                        }
                    >
                        <FormattedMessage
                            id="mining.nodes.node1.quote"
                            
                        />
                    </Quote>
                </Col>
            </Row>

            <Margin top={4} bottom={4}>
                <Divider gradient />
            </Margin>

            {/* Wavesnodes */}
            <Row>
                <Col xs={12} sm={6} lg={5}>
                    <Node {...WavesNodeNet} />
                    <Margin bottom={3} xsOnly />
                </Col>
                <Col xs={12} sm={6} lgOffset={1} lg={6}>
                    <Typography type="display1">
                        <FormattedMessage
                            id="mining.nodes.node2.title"
                            
                        />
                    </Typography>

                    <Margin />

                    <Quote
                        signature={
                            <FormattedMessage
                                id="mining.nodes.node2.signature"
                                
                            />
                        }
                    >
                        <FormattedMessage
                            id="mining.nodes.node2.quote"
                            
                        />
                    </Quote>
                </Col>
            </Row>
        </div>
    ) : null;
};

export default connect(({ wavesTopNodes }) => ({ wavesTopNodes }))(WavesNodes);
