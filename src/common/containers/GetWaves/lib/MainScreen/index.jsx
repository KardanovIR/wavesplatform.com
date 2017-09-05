import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import Image from '!svg-react-loader!./img/waves.svg';



const DevelopersMainScreen = () => (
    <MainScreen
        title="Get Waves!"
        text="You will need WAVES to create custom tokens and fuel other operations on the Waves platform, like transferring and trading tokens. There are lots of ways to get hold of WAVES, including through centralised exchanges, through the Waves DEX, and from the Waves client using a credit card via partnerships with third parties. You can trade them on popular exchanges such as Bittrex, and again on the DEX, against many other counterparty currencies, including EUR, USD and BTC."
        imageDesktop={<Image />}
    />
);


export default DevelopersMainScreen;