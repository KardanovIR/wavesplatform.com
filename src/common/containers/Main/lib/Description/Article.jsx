import React from 'react';

import Typography from 'src/common/components/Typography';
import { Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';

const styles = theme => ({
    title: {
        marginBottom: theme.spacing.unit*2
    },
    article: {
        marginBottom: theme.spacing.unit*4
    }
})



const Article = ({ classes, title, text }) => (
    <Col xs={12} md={6} lg={3} className={classes.article}>
        <Typography type="display1" tagName="div" className={classes.title}>
            { title }
        </Typography>
        <Typography type="bdy" tagName="div">
            { text }
        </Typography>
    </Col>
)


export default injectSheet(styles)(Article);