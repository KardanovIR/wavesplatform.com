import React from 'react';

import Feedback from 'src/common/components/Feedback';
import Margin from 'src/common/components/Margin';

import Facts from 'src/common/containers/Facts';


import injectSheet from 'react-jss';
import styles from './styles';




const FeedbackContainer = ({
    classes
}) => (
    <div>
        <Feedback
            image={<div className={classes.primalbaseAva} />}
            logo={<div style={{ height: 20, width: 100, background: 'red' }} />}
            avatar={<div className={classes.primalbaseAva} />}
            description="Worldwide coworking spaces for Tech Community"
            title="Primalbase crowdsale ends after one day and over 3 000 BTC raised"
            quote="We are very grateful to all who participated early and provided strong support to this project. If you were unable to secure your token in time, please stay subscribed to our mailing list to keep informed about project developments and expansions. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants"
            signature="Primalbase Team"
        />

        <Margin bottom={4} />
        
        <Facts />

        <Margin bottom={4} />

        <Feedback
            image={<div style={{ height: '100%', background: 'lightgreen' }} />}
            logo={<div className={classes.mobileGoLogo} />}
            avatar={<div className={classes.mobileGoAva} />}
            description="The Crypto-Centric Mobile Gaming Platform and Store"
            website="mobilego.io"
            title="MobileGo becomes largest blockchain crowdsale in history!"
            quote="	There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution. Modern advances with the LCD computer monitors have changed"
            signature="MobileGo Team"
        />
    </div>
);



export default injectSheet(styles)(FeedbackContainer);