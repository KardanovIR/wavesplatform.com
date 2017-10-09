import React from 'react';

import { FormattedMessage } from 'react-intl';


import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import HowToBlock from 'src/common/components/HowToBlock';



const HowToStart = ({
    onGetClientClick
}) => (
        <HowToBlock
            title={
                <FormattedMessage
                    id="getWaves.howToBuyWaves.title"
                    defaultMessage="To buy WAVES using DEX:"
                />
            }
            steps={[
                {
                    avatar: <IconProduct name="cloud" circle />,
                    text: (
                        <div>
                            <FormattedMessage
                                id="getWaves.howToBuyWaves.step1"
                                defaultMessage=" First, install the Waves client."
                            />
                            <Margin />
                            <Button
                                onClick={onGetClientClick}
                                key="main_cta_button"
                                target="_blank"
                                href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                            >
                                <FormattedMessage
                                    id="cta.getClient"
                                    defaultMessage="Get Client"
                                />
                            </Button>
                        </div>
                    )
                },
                {
                    avatar: <IconProduct name="coins" circle />,
                    text: (
                        <FormattedMessage
                            id="getWaves.howToBuyWaves.step2"
                            defaultMessage="Deposit Euros, USD, Bitcoin or Ethereum to your Waves wallet"
                        />
                    )
                },
                {
                    avatar: <IconProduct name="dex" circle />,
                    text: (
                        <FormattedMessage
                            id="getWaves.howToBuyWaves.step3"
                            defaultMessage="Place your order on the Waves DEX and buy your first WAVES!"
                        />
                    )
                },
            ]}
            quote={
                <FormattedMessage
                    id="getWaves.howToBuyWaves.quote"
                    defaultMessage="The Waves DEX, a decentralised exchange integrated within the desktop Waves Client, allows you to buy, store, sell or exchange digital assets on the Waves Platform. Just place your order to buy WAVES or your first assets!"
                />
            }
        />
    );


export default HowToStart;