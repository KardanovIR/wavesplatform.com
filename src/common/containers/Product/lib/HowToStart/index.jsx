import React from 'react';

// import Link from 'src/common/components/Link';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';


import HowToBlock from '../HowToBlock';


import injectSheet from 'react-jss';
import styles from './styles';




const HowToStart = ({
    classes,
}) => (
        <HowToBlock
            title="How do I start using my Waves wallet?"
            steps={[
                {
                    avatar: <div className={classes.iconInstall} />,
                    text: (
                        <div>
                            First, install the Waves client.
                            <Margin />
                            <Button secondary href="/get-client" withLoader>Get client</Button>
                        </div>
                    )
                },
                {
                    avatar: <div className={classes.iconCoins} />,
                    text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                },
                {
                    avatar: <div className={classes.iconExchange} />,
                    text: "You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client."
                },
            ]}
        />
    );


export default injectSheet(styles)(HowToStart);