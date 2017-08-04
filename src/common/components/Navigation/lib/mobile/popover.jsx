import React from 'react';
import injectSheet from 'react-jss';

import HandleClickOutside from '../../../../../public/components/HandleClickOutside';
import Paper from '../../../Paper';



const styles = theme => ({
    body: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: `calc(100vw - ${theme.spacing.unit * 4}px)`
    },
    close: {
        position: 'absolute',
        top: 0,
        right: 0,

        width: 20,
        height: 20,

        background: 'red',
    }
})


const Popover = ({ classes, onClose, children, open }) => (
    <HandleClickOutside onClickOutside={onClose} active={open}>
        <Paper className={classes.body}>
            <div className={classes.close} onClick={onClose} />
            {children}
        </Paper>
    </HandleClickOutside >
)


export default injectSheet(styles)(Popover);