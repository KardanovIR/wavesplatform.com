import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import Member from './lib/Member';



const Team = ({
    members,
}) => (
    <div>
        <Row>
            <Col xs={12}>
                <Typography style={{fontSize: 32}} type="display2">
                    Our Team
                </Typography>
                <Margin bottom={2} />
            </Col>
        </Row>
        <Row>
            { members.map((member, index) => (
                <Col key={`team_member_${index}`} xs={12} sm={3} md={3}>
                    <Member {...member} />
                    <Margin bottom={3} />
                </Col>
            )) }
        </Row>
    </div>
);


export default Team;