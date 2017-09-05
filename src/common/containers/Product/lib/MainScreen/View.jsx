import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';


// import ImageMobile from '!svg-react-loader!./img/image_mob.svg';
import Image from '!svg-react-loader!./img/image.svg';



const DevelopersMainScreen = ({
    onGetClientClick,
    onOnlineClientClick,
}) => (
    <MainScreen
        title={<span dangerouslySetInnerHTML={{ __html: 'Use blockchain —<br>it’s easy with Waves' }} />}
        text="Store, manage, trade, issue and analyse your digital assets safely with Waves blockchain platform and decentralised exchange."
        imageDesktop={<Image />}
        imageMobile={<Image />}
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