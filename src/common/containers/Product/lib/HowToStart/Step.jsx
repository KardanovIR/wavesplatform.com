import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';


import injectSheet from 'react-jss';

const styles = theme => ({
    panel: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 4,
        height: '100%'
    },
    avatar: {
        display: 'inline-block',
        width: theme.spacing.unit*7,
        height: theme.spacing.unit*7,
        background: theme.palette.gray[50],
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: theme.spacing.unit*2
    },
    [theme.mixins.atMedia('md')]: {
        panel: {
            paddingTop: theme.spacing.unit * 7,
            paddingBottom: theme.spacing.unit * 8,
        },
        avatar: {
            width: theme.spacing.unit*11,
            height: theme.spacing.unit*11,
            marginBottom: theme.spacing.unit*4
        }
    }
})


const Step = ({ avatar, children, classes }) => (
    <Panel dark className={classes.panel}>
        <div className={classes.avatar}>
            { avatar }
        </div>
        <Typography color="gray-50">
            { children }
        </Typography>
    </Panel>
)


export default injectSheet(styles)(Step);