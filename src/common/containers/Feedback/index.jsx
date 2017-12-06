import React from 'react';

import Feedback from 'src/common/components/Feedback';
import Margin from 'src/common/components/Margin';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';


import primalbasePhoto from './img/primalbase_photo.jpg';
import mobileGoPhoto from './img/mobile_go_photo.jpg';


const FeedbackContainer = ({
    classes,
    children,
}) => (
    <div>
        <Feedback
            image={<img className={classes.image} src={primalbasePhoto} alt="primalbase" />}
            logo={<div className={classes.primalbaseLogo} />}
            avatar={<div className={classes.primalbaseAva} />}
            description={
                <FormattedMessage
                    id="feedback.primalbase.description"
                    defaultMessage="Distributed workspace for tech community"
                />
            }
            title={
                <FormattedMessage
                    id="feedback.primalbase.title"
                    defaultMessage="Real Estate on Blockchain becomes a reality: Primalbase raised over 3000 BTC during crowdsale"
                />
            }
            quote={
                <FormattedMessage
                    id="feedback.primalbase.quote"
                    defaultMessage="We are very grateful to all who participated early and provided strong support to the project. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants. Please stay subscribed to our mailing list to keep informed about project developments and expansions."
                />
            }
            signature={
                <FormattedMessage
                    id="feedback.primalbase.signature"
                    defaultMessage="Primalbase Team"
                />
            }
        />

        <Margin bottom={5} />

        { children }

        <Margin bottom={5} />

        <Feedback
            image={<img className={classes.image} src={mobileGoPhoto} alt="mobile_go"/>}
            logo={<div className={classes.mobileGoLogo} />}
            description={
                <FormattedMessage
                    id="feedback.mobileGo.description"
                    defaultMessage="Crypto-centric mobile gaming platform and store"
                />
            }
            title={
                <FormattedMessage
                    id="feedback.mobileGo.title"
                    defaultMessage="MobileGo becomes largest blockchain crowdsale in history!"
                />
            }
            quote={
                <FormattedMessage
                    id="feedback.mobileGo.quote"
                    defaultMessage="MobileGo aims to bring the advantages of cryptocurrency to the gaming industry. The project, which raised $53 million at its crowdfund, is creating a community of gamers and developers around the GStore — an open platform on which all games are purchased for the gamecredits cryptocurrency, via a seamless integration with the GWallet. MobileGo will also use smart contracts to power peer-to-peer e-sports tournaments."
                />
            }
            signature={
                <FormattedMessage
                    id="feedback.mobileGo.signature"
                    defaultMessage="MobileGo Team"
                />
            }
        />
    </div>
);


export default injectSheet(styles)(FeedbackContainer);
