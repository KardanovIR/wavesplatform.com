import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';


import HowToBlock from 'src/common/components/HowToBlock';



const HowToStart = ({
    onGetClientClick
}) => (
    <HowToBlock
        title="How do I start using my Waves wallet?"
        steps={[
            {
                avatar: <IconProduct name="cloud" circle />,
                text: (
                    <div>
                        First, download and install the Waves client.
                            <Margin />
                        <Button
                            onClick={onGetClientClick}
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
                text: "Fill your wallet with Bitcoin, Ethereum, US dollars or Euros."
            },
            {
                avatar: <IconProduct name="dex" circle />,
                text: "You can convert them to Waves tokens using the decentralised exchange (DEX), which you can find on the Waves client."
            },
        ]}
    />
);


export default HowToStart;