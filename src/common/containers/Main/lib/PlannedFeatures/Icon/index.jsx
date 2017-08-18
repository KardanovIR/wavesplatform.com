import React from 'react';


import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = {
    icon: {
        height: '100%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    },
    dex: {
        backgroundImage: `url(${require('./plans_dex.svg')})`
    },
    fiat: {
        backgroundImage: `url(${require('./plans_fiat.svg')})`
    },
    mess: {
        backgroundImage: `url(${require('./plans_mess.svg')})`
    },
    multi: {
        backgroundImage: `url(${require('./plans_multi.svg')})`
    },
    smart: {
        backgroundImage: `url(${require('./plans_smart.svg')})`
    },
    ux: {
        backgroundImage: `url(${require('./plans_ux.svg')})`
    },
}


const Icon = ({ name, classes }) =>
    <div className={cn(classes.icon, classes[name])} />;



export default injectSheet(styles)(Icon);