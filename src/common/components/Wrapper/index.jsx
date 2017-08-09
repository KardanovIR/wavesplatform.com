import React from 'react';

import injectSheet from 'react-jss';



const styles = theme => {
    return {
        container: {
            padding: theme.spacing.getSpacing(2, 2, 0),
            maxWidth: theme.breakpoints.lg,
            margin: '0 auto',
        },
        [theme.mixins.atMedia('md')]: {
            container: {
                padding: theme.spacing.getSpacing(5, 6, 0)
            }
        },
        [theme.mixins.atMedia('lg')]: {
            container: {
                padding: theme.spacing.getSpacing(8, 9, 0)
            }
        },
        content: { }
    }
}


const Wrapper = ({ classes, children }) => (
    <div className={classes.container}>
        <div className={classes.content}>
            { children }
        </div>
    </div>
)



export default injectSheet(styles)(Wrapper);