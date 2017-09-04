import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import HowToBlock from 'src/common/components/HowToBlock';



const HowToStart = ({
    onGetClientClick
}) => (
    <HowToBlock
        title="Buy Waves in a Waves client"
        steps={[
            {
                avatar: <IconProduct name="cloud" circle />,
                text: (
                    <div>
                        First, install the Waves client.
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
                text: "Deposit Euros, USD, Bitcoin or Ethereum to Waves wallet"
            },
            {
                avatar: <IconProduct name="dex" circle />,
                text: "Place your order to buy currency on Waves DEX and get your first Waves!"
            },
        ]}
        quote="The Waves DEX, a decentralized exchange within the Waves Client, allows you to buy, sell or exchange digital assets within the Waves Platform. Just place your order to buy Waves and get your first assets! "
    />
);


export default HowToStart;