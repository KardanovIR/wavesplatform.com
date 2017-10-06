import shadow from 'src/common/styles/shadow';
import flexCentered from 'src/common/styles/flexCentered';


const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    centered: flexCentered,
    rootCustomSize: {
        width: props => props.size,
        height: props => props.size,
    },
    innerWrapper: {
        height: '57%',
        width: '57%',
    },
    circle: {
        borderRadius: '50%'
    },
    circleLight: {
        composes: '$circle',
        background: theme.palette.gray[0],
        ...shadow,
    },
    circleDark: {
        composes: '$circle',
        background: theme.palette.primary[900],
    }
})


export default styles;