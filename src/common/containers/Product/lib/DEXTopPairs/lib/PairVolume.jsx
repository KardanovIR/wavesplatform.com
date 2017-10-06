import React from 'react';

import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';

import { FormattedNumber, FormattedMessage } from 'react-intl';


const styles = theme => ({
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
        lineHeight: '17px',
        color: theme.palette.gray[800]
    },
    grayText: {
        color: theme.palette.grayBlue[500]
    }
})



const PairVolume = ({
    classes,
    assets,
    volume,
}) => (
        <div className={classes.wrapper}>
            <Typography className={classes.assets}>{assets[0]}/{assets[1]}</Typography>
            <Typography type="numeral" align="right" className={classes.volume} noMargin>
                { !!volume
                    ? <span>$ <FormattedNumber value={volume} /></span>
                    : (
                        <span className={classes.grayText}>
                            <FormattedMessage id="product.DEXTopPairs.unavailable" defaultMessage="n/a" />
                        </span>
                    )
                }
            </Typography>
        </div>
    );


export default injectSheet(styles)(PairVolume);