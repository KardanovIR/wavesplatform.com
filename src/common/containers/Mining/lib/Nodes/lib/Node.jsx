import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Quote from 'src/common/components/Quote';
import Link from 'src/common/components/Link';
import Panel from 'src/common/components/Panel';
import Divider from 'src/common/components/Divider';

import { FormattedMessage, FormattedNumber } from 'react-intl';

const Node = ({ name, balance, share }) => (
    <Panel>
        <Typography type="display2">{name}</Typography>
        <Margin />

        <Divider />

        <Row>
            <Col xs>
                <Typography type="body">
                    <FormattedMessage
                        id="balance"
                        defaultMessage="Balance"
                    />
                </Typography>
            </Col>
            <Col xs>
                <Typography type="body" align="right">
                    <FormattedNumber value={balance} /> WAVES
                </Typography>
            </Col>
        </Row>
    </Panel>
);

export default Node;
