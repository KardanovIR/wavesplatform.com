import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';


import ImageMobile from '!svg-react-loader!./img/table_mob.svg';
import Image from '!svg-react-loader!./img/image.svg';



const DevelopersMainScreen = () => (
    <MainScreen
        title="Get started with blockchain"
        text="Gain access to the platform solutions to store, trade, manage and issue your digital assets in an easy and secure way."
        imageDesktop={<Image />}
        imageMobile={<ImageMobile />}
        buttons={[
            (
                <Button
                    key="main_cta_button"
                    target="_blank"
                    href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                >
                    Get Client
                </Button>
            ),
            <Button withLoader secondary key="main_cta_button2">Get Waves</Button>,
        ]}
    />
);


export default DevelopersMainScreen;