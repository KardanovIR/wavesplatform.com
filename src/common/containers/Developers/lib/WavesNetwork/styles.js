import mockup from './img/mockup.png';

import placeholder from 'src/common/styles/placeholder';



const styles = theme => ({
    text: {
        textAlign: 'center'
        // padding: theme.spacing.getSpacing(0, 0, 5)
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    }
})

export default styles;