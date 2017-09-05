import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import HowToBlock from 'src/common/components/HowToBlock';



const HowToStart = ({
    onGetClientClick
}) => (
    <HowToBlock
        title="To buy WAVES using DEX:"
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
                text: "Deposit Euros, USD, Bitcoin or Ethereum to your Waves wallet "
            },
            {
                avatar: <IconProduct name="dex" circle />,
                text: "Place your order on the Waves DEX and buy your first WAVES!"
            },
        ]}
        quote="The Waves DEX, a decentralised exchange integrated within the desktop Waves Client, allows you to buy, store, sell or exchange digital assets on the Waves Platform. Just place your order to buy WAVES or your first assets!"
    />
);


export default HowToStart;