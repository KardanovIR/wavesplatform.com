import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';


import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';


import imageSrc from '!svg-url-loader?noquotes!./img/image.svg';
import imageMobSrc from '!svg-url-loader?noquotes!./img/image_mob.svg';



const DevelopersMainScreen = ({
    onGetClientClick,
    onOnlineClientClick,
}) => (
        <MainScreen
            title={
                <FormattedHTMLMessage
                    id="product.title"
                    defaultMessage="Use blockchain —<br>it’s easy with Waves"
                />
            }
            text={
                <FormattedMessage
                    id="product.text"
                    defaultMessage="Store, manage, trade, issue and analyse your digital assets safely with Waves blockchain platform and decentralised exchange."
                />
            }
            imageDesktop={<img src={imageSrc} alt="Product mockup" />}
            imageMobile={<img src={imageMobSrc} alt="Product mobile mockup" />}
            buttons={[
                (
                    <Button
												secondary
                        onClick={onGetClientClick}
                        key="main_cta_button"
                        target="_blank"
                        href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                    >
                        <FormattedMessage id="cta.getClient" />
                    </Button>
                ),
                <Button
                    onClick={onOnlineClientClick}
                    key="main_cta_button2"
                    target="_blank"
                    href="https://waveswallet.io/"
                >
                    <FormattedMessage id="cta.onlineClient" defaultMessage="Online Client" />
            </Button>,
            ]}
        />
    );


export default DevelopersMainScreen;