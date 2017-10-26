import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Quote from 'src/common/components/Quote';
import Link from 'src/common/components/Link';
import Divider from 'src/common/components/Divider';

import { FormattedMessage } from 'react-intl';

const WavesNodes = () => (
    <div>
        <SectionTitleText
            title={
                <FormattedMessage
                    id="mining.nodes.title"
                    defaultMessage="A focus for the community"
                />
            }
            text={
                <FormattedMessage
                    id="mining.nodes.text"
                    defaultMessage="A Waves node isn’t just a way to get paid for securing the network. These are hubs of activity around which entrepreneurs build new businesses and engage the community. You can find a list of Waves nodes at {pywavesLink}"
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

        {/* WAVESGO */}
        <Row>
            <Col xs={12} md={6}>
                WAVESGO
            </Col>
            <Col xs={12} md={6}>
                <Typography type="display1">
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
                        defaultMessage="We are very grateful to all who participated early and provided strong support to the project. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools."
                    />
                </Quote>
            </Col>
        </Row>

        <Margin top={4} bottom={4}>
            <Divider gradient />
        </Margin>

        {/* Wavesnodes */}
        <Row>
            <Col xs={12} md={6}>
                Wavesnodes
            </Col>
            <Col xs={12} md={6}>
                <Typography type="display1">
                    <FormattedMessage
                        id="mining.nodes.node2.title"
                        defaultMessage="WavesNode.net represents a developing community in Holland. The node accepts multiple tokens for fees and has a growing list of supporters — as well as offering unique Waves merchandise!"
                    />
                </Typography>

                <Margin />

                <Quote
                    signature={
                        <FormattedMessage
                            id="mining.nodes.node2.signature"
                            defaultMessage="Wavesnode.net Team"
                        />
                    }
                >
                    <FormattedMessage
                        id="mining.nodes.node2.quote"
                        defaultMessage="We are very grateful to all who participated early and provided strong support to the project. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools."
                    />
                </Quote>
            </Col>
        </Row>
    </div>
);

export default WavesNodes;
