import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';


import HowToBlock from '../HowToBlock';



const HowToStart = () => (
    <HowToBlock
        title="How do I start using my Waves wallet?"
        steps={[
            {
                avatar: <IconProduct name="cloud" circle="dark" />,
                text: (
                    <div>
                        First, install the Waves client.
                            <Margin />
                        <Button secondary href="/get-client" withLoader>Get client</Button>
                    </div>
                )
            },
            {
                avatar: <IconProduct name="coins" circle="dark" />,
                text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
            },
            {
                avatar: <IconProduct name="dex" circle="dark" />,
                text: "You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client."
            },
        ]}
    />
);


export default HowToStart;