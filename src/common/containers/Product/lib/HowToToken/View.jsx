import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import HowToBlock from 'src/common/components/HowToBlock';

import { FormattedMessage } from 'react-intl';


const HowToStart = ({
    onGetClientClick
}) => (
        <HowToBlock
            title={
                <FormattedMessage
                    id="product.howToToken.title"
                    defaultMessage="How do I release my own tokens on Waves?"
                />
            }
            steps={[
                {
                    avatar: <IconProduct name="cloud" circle />,
                    text: (
                        <div>
                            <FormattedMessage
                                id="product.howToToken.step1"
                                defaultMessage="First, install the Waves client."
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
                            id="product.howToToken.step2"
                            defaultMessage="To create tokens, you’ll need 1 WAVES to pay the issuance fee. You can buy WAVES directly in the client with $ or €."
                        />
                    )
                },
                {
                    avatar: <IconProduct name="dex" circle />,
                    text: (
                        <FormattedMessage
                            id="product.howToToken.step3"
                            defaultMessage="Go to the Token Creation tab and fill out a simple form. Your token will appear on the network within about a minute. Your token will also go through a verification process and after that will receive a green check mark on the decentralised exchange."
                        />
                    )
                }
            ]}
            quote={
                <FormattedMessage
                    id="product.howToToken.quote"
                    defaultMessage="After that, put the token on sale in the DEX tab at a price that will ensure that you achieve your project’s fundraising goals. You can create orders in several pairs if you want to accept different currencies, and you can even sell them at different prices to create bonus conditions for the first investors."
                />
            }
        />
    );


export default HowToStart;