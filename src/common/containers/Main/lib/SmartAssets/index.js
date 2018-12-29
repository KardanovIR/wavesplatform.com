import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import {Row, Col} from 'src/common/components/Grid';
import Button from 'src/common/components/Button';

import {FormattedMessage, FormattedPlural} from 'react-intl';

import styles from './styles';
import injectSheet from "react-jss";
import ContentContainer from 'src/common/components/ContentContainer';

const TIME_REF = {
    DAY: 1000 * 60 * 60 * 24,
    HOUR: 1000 * 60 * 60,
    MINUTE: 1000 * 60,
    SECOND: 1000
};

const Digit = ({time, text, className, isLast}) => {
    return <div className={className} style={{minHeight: '90px'}}>
        <div style={{ display: 'inline-block' }}>
            <div>
                <Typography type="display5" style={{ lineHeight: '0.6' }}>
                    {time}
                    {isLast ? null : <span style={{paddingLeft: '10px', marginRight: '10px'}}>:</span>}
                </Typography>
            </div>
            <div>
                <Typography type="body" style={{fontSize: '12px'}}>
                    <FormattedPlural
                        value={time}
                        one={
                            <FormattedMessage
                                id={`home.smartAssets.${text}.one`}
                            />
                        }
                        few={
                            <FormattedMessage
                                id={`home.smartAssets.${text}.few`}
                            />
                        }
                        other={
                            <FormattedMessage
                                id={`home.smartAssets.${text}.other`}
                            />
                        }
                    />
                </Typography>
            </div>
        </div>
    </div>
}

class SmartAssetsView extends React.PureComponent {

    state = { showCounter: true,  timeDiff: null, days: 0, hours: 0, minutes: 0, seconds: 0, initData: false };

    constructor(props) {
        super(props);
        this.getTime();
    }

    async getTime() {
        const data = await fetch('https://nodes.wavesplatform.com/utils/time');
        const { system } = await data.json();
        const myTime = Date.now();
        this.setState({ timeDiff: myTime - ( system + 3 * TIME_REF.HOUR) });
    }

    updateTime() {
        const refTime = 1546829001000;

        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.updateTime(), 400);

        if (!this.state.timeDiff == null) {
            return null;
        }

        const time = refTime - Date.now() - this.state.timeDiff + 60 * 60 * 1000;

        if (time < 0) {
            this.setState({ showCounter: false });
            clearTimeout(this.timer);
            return null;
        }

        const days = parseInt(time / TIME_REF.DAY);
        const hours = parseInt((time - days * TIME_REF.DAY) / TIME_REF.HOUR);
        const minutes = parseInt((time - days * TIME_REF.DAY - hours * TIME_REF.HOUR) / TIME_REF.MINUTE);
        const seconds = parseInt((time - days * TIME_REF.DAY - hours * TIME_REF.HOUR - minutes * TIME_REF.MINUTE ) / TIME_REF.SECOND);

        this.setState({ days, hours, minutes, seconds, initData: true });
    }

    componentWillMount() {
         this.updateTime();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { classes } = this.props;
        const { showCounter, days, hours, minutes, seconds, initData } = this.state;

        return (
            <div className={classes.bgAssets}>
                <ContentContainer>
                    <Row>
                        {showCounter ? null : <Col xs={11} sm={8}>
                            <Typography type="display3" className={classes.smartAssetTitle}>
                                <FormattedMessage id="home.smartAssets.title.text"
                                                  defaultMessage="Smart Assets feature is activated on Waves MainNet!"
                                />
                            </Typography>
                            <Margin bottom={3}/>
                            <Button target="_blank"
                                    href='https://blog.wavesplatform.com/smart-assets-and-smart-account-trading-features-released-on-mainnet-c295ee58bb13'
                                    secondary>
                                <FormattedMessage id="home.smartAssets.button.learn"
                                                  defaultMessage="Learn more"
                                />
                            </Button>
                            <Margin bottom={4}/>
                        </Col>}
                        {!showCounter && initData ? null : <Col xs={12} sm={12}>
                            <Typography type="display2" className={classes.smartAssetNotActiveTitle}>
                                <FormattedMessage id='home.smartAssets.activated.title'
                                                  defaultMessage="Smart Assets will be activated in"
                                />
                            </Typography>
                            <Margin bottom={2}/>
                            <div>
                                <Digit className={classes.digest} time={days} text='days'/>
                                <Digit className={classes.digest} time={hours} text='hours'/>
                                <Digit className={classes.digest} time={minutes} text='minutes'/>
                                <Digit className={classes.digest} time={seconds} text='seconds' isLast={true}/>
                            </div>
                            <Margin bottom={4}/>
                        </Col>}
                    </Row>
                </ContentContainer>
            </div>
        );
    }
}

export default injectSheet(styles)(SmartAssetsView);

