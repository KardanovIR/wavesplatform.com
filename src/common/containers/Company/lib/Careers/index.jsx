import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const Team = ({
    classes,
}) => (
        <Row>
            <Col xs={12} className={classes.centered}>
                <Typography type="display3" align="center" inverted>
                    Careers
                </Typography>
                
                <Typography type="body" align="center" inverted className={classes.narrow}>
                    We’d be happy to welcome you to our team. Come change the world with us.
                </Typography>

                <Margin bottom={3} />

                <Button href="mailto:hr@wavesplatform.com" secondary>Submit a resume</Button>
            </Col>
        </Row>
    );


export default injectSheet(styles)(Team);