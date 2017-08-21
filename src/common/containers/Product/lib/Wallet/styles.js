import bgImage from 'src/common/styles/bgImage';
import shadow from 'src/common/styles/shadow';

import wallet from './img/wallet_wallet.svg';
import security from './img/wallet_security.svg';
import transfer from './img/wallet_wallet.svg';


const styles = theme => ({
    icon: {
        ...shadow,
        borderRadius: '50%',
    },
    security: {
        composes: '$icon',
        ...bgImage,
        backgroundImage: `url(${security})`
    },
    wallet: {
        composes: '$icon',
        ...bgImage,
        backgroundImage: `url(${wallet})`
    },
    transfer: {
        composes: '$icon',
        ...bgImage,
        backgroundImage: `url(${transfer})`
    },
})

export default styles;