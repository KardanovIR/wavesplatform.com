import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

const SectionTitleText = ({ titleType, text, title, marginSize }) => {
    return (
        <div>
            <Row centered>
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Typography type={titleType} align="center">
                        {title}
                    </Typography>

                    <Typography type="body2" tagName="div" align="center">
                        {text}
                    </Typography>
                </Col>
            </Row>
            {!!marginSize && <Margin bottom={marginSize} />}
        </div>
    );
};

SectionTitleText.defaultProps = {
    titleType: 'display3',
    marginSize: 4,
};

export default SectionTitleText;
