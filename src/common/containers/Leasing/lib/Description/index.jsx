import React from 'react';

import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import Hidden from 'src/common/components/Hidden';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import List from 'src/common/components/List';
import { Row, Col } from 'src/common/components/Grid';

import Image from '!svg-react-loader!./img/leasing_scheme.svg';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
const styles = ({ spacing, breakpoints }) => ({
    imageWrapper: {
        padding: [spacing.unit * 2, spacing.unit * 4],
        margin: [0, 'auto'],
    },
    col: {
        display: 'flex',
        alignItems: 'center',
    },
    [breakpoints.up('lg')]: {
        imageWrapper: {
            padding: 0,
        },
        panel: {
            paddingTop: spacing.unit * 8,
            paddingBottom: spacing.unit * 8,
        },
    },
});

const Description = ({ classes }) => (
    <div>
        <SectionTitleText
            title={
                <FormattedMessage
                    id="leasing.description.title"
                    
                />
            }
            text={
                <FormattedMessage
                    id="leasing.description.subtitle"
                    
                />
            }
        />

        <Panel className={classes.panel}>
            <Row>
                <Col xs={12} sm={6} lg={4} lgOffset={1} className={classes.col}>
                    <div className={classes.imageWrapper}>
                        <Image />
                    </div>
                    <Margin bottom={4} xsOnly />
                </Col>
                <Col xs={12} sm={6} lg={6} lgOffset={1} className={classes.col}>
                    <Typography type="body">
                        <FormattedMessage
                            id="leasing.description.text"
                            
                        />
                    </Typography>
                    <Margin bottom={4} xsOnly />
                </Col>
            </Row>
        </Panel>

        {/* <Row>
            <Col xs={12} sm={6} lg={3}>
                <List items={[<FormattedMessage id="leasing.description.item1"  />]} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <List />
            </Col>
            <Col xs={12} sm={6} lg={3} />
            <Col xs={12} sm={6} lg={3} />
        </Row> */}
    </div>
);

export default injectSheet(styles)(Description);
