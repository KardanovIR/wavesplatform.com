import React from 'react';

import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';



// const arrowStyles = theme => ({
//     up: {
//         color: theme.palette.success[500]
//     },
//     down: {
//         color: theme.palette.danger[500]
//     }
// })

// const Arrow = injectSheet(arrowStyles)(
//     ({ direction, classes }) =>
//         direction === "down"
//         ? <span dangerouslySetInnerHTML={{__html: "&nbsp;&darr;"}} className={classes.down} />
//         : <span dangerouslySetInnerHTML={{__html: "&nbsp;&uarr;"}} className={classes.up} /> 
// )




const styles = {
    wrapper: {
        display: 'flex',
        alignItems: "flex-end",
        lineHeight: 'normal'
    },
    assets: {
        flex: 1,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        lineHeight: '17px'
    },
    volume: {
        flex: 1,
        fontSize: 17,
        lineHeight: '17px'
    }
}


const PairVolume = ({
    classes,
    assets,
    volume,
    // direction,
}) => (
        <div className={classes.wrapper}>
            <Typography className={classes.assets}>{assets[0]}/{assets[1]}</Typography>
            <Typography type="numeral" align="right" className={classes.volume} noMargin>
                ${volume.toLocaleString('ru')}
                {/* <Arrow direction={direction} /> */}
            </Typography>
        </div>
    );


export default injectSheet(styles)(PairVolume);