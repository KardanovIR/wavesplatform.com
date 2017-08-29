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
                avatar: <IconProduct name="cloud" circle />,
                text: (
                    <div>
                        First, install the Waves client.
                            <Margin />
                        <Button href="/get-client" withLoader>Get client</Button>
                    </div>
                )
            },
            {
                avatar: <IconProduct name="coins" circle />,
                text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
            },
            {
                avatar: <IconProduct name="dex" circle />,
                text: "You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client."
            },
        ]}
    />
);


export default HowToStart;