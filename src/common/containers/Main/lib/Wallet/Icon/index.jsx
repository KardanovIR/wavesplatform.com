import React from 'react';


import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = {
    icon: {
        height: '100%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    },
    wallet: {
        backgroundImage: `url(${require('./wallet_wallet.svg')})`
    },
    interest: {
        backgroundImage: `url(${require('./wallet_interest.svg')})`
    },
    mining: {
        backgroundImage: `url(${require('./wallet_mining.svg')})`
    },
    secure: {
        backgroundImage: `url(${require('./wallet_secure.svg')})`
    },
    transfer: {
        backgroundImage: `url(${require('./wallet_transfer.svg')})`
    },
}


const Icon = ({ name, classes }) =>
    <div className={cn(classes.icon, classes[name])} />;



export default injectSheet(styles)(Icon);