import bgImage from 'src/common/styles/bgImage';

import leasing from './img/leasing.svg';
import mining from './img/mining.svg';


const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(5, 0, 5)
    },
    column: {
        display: 'flex',
        marginBottom: theme.spacing.unit * 2
    },
    panel: {
        flex: 1,
    },
    panelTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        ...bgImage,
        height: theme.spacing.unit * 5,
        flex: [0, 0, `${theme.spacing.unit * 5}px`],
        marginRight: theme.spacing.unit * 2,
    },
    iconLeasing: {
        composes: '$icon',
        backgroundImage: `url(${leasing})`,
    },
    iconMining: {
        composes: '$icon',
        backgroundImage: `url(${mining})`,
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(20, 0, 15)
        },
        feature: {
            marginBottom: theme.spacing.unit * 6
        }
    }
})

export default styles;