import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';


import ImageMobile from '!svg-react-loader!./img/table_mob.svg';
import Image from '!svg-react-loader!./img/table.svg';



const DevelopersMainScreen = () => (
    <MainScreen
        title="Build unstoppable applications"
        text="These apps run on a custom built  blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property."
        imageDesktop={<Image />}
        imageMobile={<ImageMobile />}
        buttons={[
            (
                <IconButton
                    key="main_cta_button"
                    // className={classes.ctaButton}
                    href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
                    target="_blank"
                    iconName="github"
                    secondary
                >
                    Documentation
                </IconButton>
            ),
            (
                <IconButton
                    key="main_cta_button2"
                    // className={classes.secondCtaButton}
                    href="https://github.com/wavesplatform/WavesGUI"
                    target="_blank"
                    iconName="github"
                    bordered
                >
                    Client
                </IconButton>
            ),
        ]}
    />
);


export default DevelopersMainScreen;