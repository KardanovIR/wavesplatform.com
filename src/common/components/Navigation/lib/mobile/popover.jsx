import React from 'react';
import injectSheet from 'react-jss';

import HandleClickOutside from '../../../../../public/components/HandleClickOutside';
import Paper from '../../../Paper';
import Icon from '../../../Icon';



const styles = theme => ({
    body: {
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        right: 0,
        width: `calc(100vw - ${theme.spacing.unit * 4}px)`,
        padding: theme.spacing.unit
    },
    close: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 40,
        height: 40,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


const Popover = ({ classes, onClose, children, open }) => (
    <HandleClickOutside onClickOutside={onClose} active={open}>
        <Paper className={classes.body}>
            <div className={classes.close} onClick={onClose}>
                <Icon name="cross" size={17}  />
            </div>
            {children}
        </Paper>
    </HandleClickOutside >
)


export default injectSheet(styles)(Popover);