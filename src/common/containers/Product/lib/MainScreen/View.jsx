import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';


import imageSrc from '!svg-url-loader?noquotes!./img/image.svg';
import imageMobSrc from '!svg-url-loader?noquotes!./img/image_mob.svg';



const DevelopersMainScreen = ({
    onGetClientClick,
    onOnlineClientClick,
}) => (
    <MainScreen
        title={<span dangerouslySetInnerHTML={{ __html: 'Use blockchain —<br>it’s easy with Waves' }} />}
        text="Store, manage, trade, issue and analyse your digital assets safely with Waves blockchain platform and decentralised exchange."
        imageDesktop={<img src={imageSrc} alt="Product mockup" />}
        imageMobile={<img src={imageMobSrc} alt="Product mobile mockup" />}
        buttons={[
            (
                <Button
                    onClick={onGetClientClick}
                    key="main_cta_button"
                    target="_blank"
                    href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                >
                    Get Client
                </Button>
            ),
            <Button
                onClick={onOnlineClientClick}
                secondary
                key="main_cta_button2"
                target="_blank"
                href="https://waveswallet.io/"
            >
                Online client
            </Button>,
        ]}
    />
);


export default DevelopersMainScreen;