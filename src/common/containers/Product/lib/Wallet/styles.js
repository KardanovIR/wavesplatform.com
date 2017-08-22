import bgImage from 'src/common/styles/bgImage';
import shadow from 'src/common/styles/shadow';


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