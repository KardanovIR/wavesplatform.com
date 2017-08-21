import React from 'react';

// import AvatarTitleText from 'src/common/components/AvatarTitleText';
// import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';

import PairVolume from './lib/PairVolume';

// import pairs from './pairs';

import injectSheet from 'react-jss';
import styles from './styles';



const DEXTopPairs = ({ classes, pairs }) => (
    <Panel className={classes.root}>
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