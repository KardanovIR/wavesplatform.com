import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';


import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';


import getRemainingTime from './lib/getRemainingTime';




class Countdown extends Component {
    state = getRemainingTime();

    componentDidMount() {
        setInterval(() => this.setState(getRemainingTime()), 1000);
    }

    render() {
        return (
            <div>
                {/* <Margin top={3} bottom={2}> */}
                    <Typography type="display1" tagName="div" align="center">
                        <FormattedMessage
                            id="wavesNG.stressTest.anounce"
                            defaultMessage="Public stress test will start on October, 12th"
                        />
                    </Typography>
                    <Margin />
                    <Typography type="numeral" tagName="div" align="center">
                        <FormattedMessage
                            id="wavesNG.stressTest.remainingTime"
                            defaultMessage="{days}:{hours}:{minutes}:{seconds}"
                            values={this.state}
                        />
                    </Typography>
                {/* </Margin> */}
            </div>
        )
    }
}



// export default injectSheet(styles)(Countdown);
export default Countdown;