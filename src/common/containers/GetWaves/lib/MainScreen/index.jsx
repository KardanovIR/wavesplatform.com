import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import Image from '!svg-react-loader!./img/waves.svg';



const DevelopersMainScreen = () => (
    <MainScreen
        title={<span dangerouslySetInnerHTML={{  __html: 'Buy, Sell,<br>Exchange Waves' }}  />}
        text="In order to do so you will need to download Waves client and buy Waves tokens on Waves DEX or other exchange."
        imageDesktop={<Image />}
        imageMobile={<Image />}
    />
);


export default DevelopersMainScreen;