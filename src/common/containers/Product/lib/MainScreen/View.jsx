import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';


import ImageMobile from '!svg-react-loader!./img/image_mob.svg';
import Image from '!svg-react-loader!./img/image.svg';



const DevelopersMainScreen = ({
    onGetClientClick,
    onOnlineClientClick,
}) => (
    <MainScreen
        title="Use blockchain — it’s easy with Waves"
        text="Issue, store, manage, trade, and analyze your digital assets safely with Waves blockchain platform and decentralized exchange."
        imageDesktop={<Image />}
        imageMobile={<ImageMobile />}
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