import React from 'react';

import injectSheet from 'react-jss';



const styles = theme => {
    return {
        container: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            maxWidth: theme.breakpoints.lg,
            margin: '0 auto',
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            container: {
                paddingTop: `${theme.spacing.unit*10}px`,
            }
        },
        content: {
            background: '#efefef'
        }
    }
}


const Wrapper = ({ classes, ...rest, }) => (
    <div className={classes.container}>
        <div className={classes.content} {...rest} />
    </div>
)



export default injectSheet(styles)(Wrapper);