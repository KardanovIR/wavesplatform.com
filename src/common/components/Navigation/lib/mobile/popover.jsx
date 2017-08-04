import React from 'react';
import injectSheet from 'react-jss';

import HandleClickOutside from '../../../../../public/components/HandleClickOutside';


const styles = theme => ({
    body: {
        position: 'absolute',
        top: 0,
        right: 0,

        width: `calc(100vw - ${theme.spacing.unit * 4}px)`,
        background: 'yellow',
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



const Popover = ({ classes, onClose, children }) => (
    <HandleClickOutside onClickOutside={onClose}>
        <div className={classes.body}>
            <div className={classes.close} onClick={onClose} />
            {children}
        </div>
    </HandleClickOutside>
)


export default injectSheet(styles)(Popover);