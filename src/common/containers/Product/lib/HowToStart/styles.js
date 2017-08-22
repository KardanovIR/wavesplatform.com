import bgImage from 'src/common/styles/bgImage';

import install from './img/install.svg';


const styles = theme => ({
    icon: {
        ...bgImage,
    },
    iconInstall: {
        composes: '$icon',
        backgroundImage: `url(${install})`
    },
    iconCoins: {
        composes: '$icon',
        backgroundImage: `url(${install})`
    },
    iconExchange: {
        composes: '$icon',
        backgroundImage: `url(${install})`
    },
})

export default styles;