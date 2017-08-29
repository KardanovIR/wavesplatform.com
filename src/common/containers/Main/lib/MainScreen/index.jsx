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
                    secondary
                    key="main_cta_button"
                    target="_blank"
                    href="/download"
                >
                    Get Client
                </Button>
            ),
            <Button withLoader bordered key="main_cta_button2" href="/download">Get Waves</Button>,
        ]}
    />
);


export default DevelopersMainScreen;