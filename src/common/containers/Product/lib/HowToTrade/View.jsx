import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';

import { FormattedMessage } from 'react-intl';

import HowToBlock from 'src/common/components/HowToBlock';



const HowToStart = ({
    onGetClientClick
}) => (
        <HowToBlock
            title={
                <FormattedMessage
                    id="product.howToTrade.title"
                    defaultMessage="How do I start trading on the Waves DEX?"
                />
            }
            steps={[
                {
                    avatar: <IconProduct name="cloud" circle />,
                    text: (
                        <div>
                            <FormattedMessage
                                id="product.howToTrade.step1"
                                defaultMessage="First, download and install the Waves client."
                            />
                            <Margin />
                            <Button
                                onClick={onGetClientClick}
                                key="main_cta_button"
                                target="_blank"
                                href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                            >
                                <FormattedMessage id="cta.getClient" />
                            </Button>
                        </div>
                    )
                },
                {
                    avatar: <IconProduct name="coins" circle />,
                    text: (
                        <FormattedMessage
                            id="product.howToTrade.step2"
                            defaultMessage="Fill your wallet with Bitcoin, Ethereum, US dollars or Euros."
                        />
                    )
                },
                {
                    avatar: <IconProduct name="dex" circle />,
                    text: (
                        <FormattedMessage
                            id="product.howToTrade.step3"
                            defaultMessage="You will need to pay a small commission in Waves to trade any pairs, so buy WAVES in advance."
                        />
                    )
                }
            ]}
        />
    );


export default HowToStart;