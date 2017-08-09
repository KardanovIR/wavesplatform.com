import React from 'react';

import Typography from 'src/common/components/Typography';


import injectSheet from 'react-jss';

const styles = theme => ({
    title: {
        marginBottom: theme.spacing.unit*2
    },
    article: {
        marginBottom: theme.spacing.unit*2
    }
})



const Article = ({ classes, title, text }) => (
    <div className={classes.article}>
        <Typography type="body" tagName="div" margin>
            { title }
        </Typography>
        <Typography type="body" tagName="div">
            { text }
        </Typography>
    </div>
)


export default injectSheet(styles)(Article);