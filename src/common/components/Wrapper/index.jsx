import React from 'react';

import injectSheet from 'react-jss';



const styles = theme => {
    return {
        container: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            maxWidth: theme.breakpoints.lg,
            margin: '0 auto',
        },
        [theme.mixins.atMedia('md')]: {
            container: {
                paddingTop: `${theme.spacing.unit*6}px`,
            }
        },
        [theme.mixins.atMedia('lg')]: {
            container: {
                paddingTop: `${theme.spacing.unit*10}px`,
            }
        },
        content: {
            // background: '#efefef'
        }
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