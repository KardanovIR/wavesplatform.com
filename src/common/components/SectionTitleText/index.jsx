import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

const SectionTitleText = ({
  titleType,
  text,
  title,
  marginSize,
  align,
  titleWeight,
}) => {
  return (
    <div>
      <Row>
        <Col xs={12} sm={10} md={10} lg={10}>
          <Typography type={titleType} align={align} weight={titleWeight}>
            {title}
          </Typography>
          <Typography type="body2" tagName="div" align={align}>
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
  align: 'center',
  weight: undefined,
};

export default SectionTitleText;
