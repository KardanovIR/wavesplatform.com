import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';

import PairVolume from './lib/PairVolume';


import injectSheet from 'react-jss';
import styles from './styles';



const DEXTopPairs = ({ classes, pairs }) => (
    <Panel className={classes.root}>
        <Margin className={classes.headers}>
            <Typography type="display1">Top 10 pairs</Typography>
            <Typography className={classes.textGray} align="right" noMargin>Volume (24h)</Typography>
        </Margin>
        {pairs.map((pair, index) => (
            <Margin key={`top_pair_${index}`} bottom={2}>
                <PairVolume
                    { ...pair }
                />
            </Margin>
        ))}
    </Panel>
);

DEXTopPairs.defaultProps = {
    pairs: []
}


export default injectSheet(styles)(DEXTopPairs);