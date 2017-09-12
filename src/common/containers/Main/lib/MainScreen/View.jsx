import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedHTMLMessage } from 'react-intl';


// import Image from '!svg-react-loader!./img/image.svg';



const IndexMainScreen = ({
    onGetClientClick,
    onGetWavesClick,
}) => (
        <MainScreen
            title={
                <FormattedHTMLMessage
                    id='home.main.title'
                    defaultMessage='Get started<br>with blockchain'
                />
            }
            text="Gain access to the Waves platform’s solutions for storing, trading, managing and issuing your digital assets, easily and securely."
            //imageDesktop={<span />}
            //imageMobile={<span />}
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
                (
                    <Button
                        onClick={onGetWavesClick}
                        href="/get-waves"
                        withLoader
                        secondary
                        key="main_cta_button2"
                    >
                        Get Waves
                </Button>
                )
            ]}
        />
    );


export default IndexMainScreen;