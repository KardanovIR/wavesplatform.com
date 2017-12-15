import map from './img/map2.svg';
import bgImage from 'src/common/styles/bgImage';

export default theme => ({
    title: {
        fontSize: 16,
        fontWeight: 400,
    },
    text: {
        fontSize: 23,
    },
    numbersWrapper: {
        textAlign: 'left',
    },
    number: {
        display: 'inline-block',
        padding: [0, theme.spacing.unit * 4, 0, 0],
    },
    map: {
        ...bgImage,
        backgroundImage: `url(${map})`,
        width: '100%',
        paddingTop: '54%',
        height: 0,
    },
    Int: {
        fontSize: 40,
        fontWeight: 500,
    },
    [theme.breakpoints.up("md")]: {
        title: {
            fontSize: 23,
            fontWeight: 400,
        },
        text: {
            fontSize: 32,
        },
        Int: {
            fontSize: 80,
        }
    }
});
