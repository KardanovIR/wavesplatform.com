import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';


import HowToBlock from '../HowToBlock';



const HowToStart = () => (
    <HowToBlock
        title="How do I start trading on the Waves DEX?"
        steps={[
            {
                avatar: <IconProduct name="cloud" circle />,
                text: (
                    <div>
                        First, install the Waves client.
                        <Margin />
                        <Button
                            key="main_cta_button"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                        >
                            Get Client
                        </Button>
                    </div>
                )
            },
            {
                avatar: <IconProduct name="coins" circle />,
                text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
            },
            {
                avatar: <IconProduct name="dex" circle />,
                text: "You will need to pay a small commission in Waves to trade any pairs, so buy Waves in advance."
            },
        ]}
    />
);


export default HowToStart;