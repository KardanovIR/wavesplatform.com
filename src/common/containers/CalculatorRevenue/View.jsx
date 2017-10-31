import React from 'react';

import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import Input from 'src/common/components/Input';
import Typography from 'src/common/components/Typography';
import ButtonGroup from 'src/common/components/ButtonGroup';
import Select from 'src/common/components/Select';
import Divider from 'src/common/components/Divider';
// import Slider from 'src/common/components/Slider';
import Hidden from 'src/common/components/Hidden';

import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'ramda';

import timeOptions from './lib/timeOptions';
import Result from './lib/Result';
import ScaledSlider from './lib/ScaledSlider';

import { transform, reverse } from './lib/sliderScale';

import injectSheet from 'react-jss';

const styles = theme => ({
    buttonGroup: {
        width: '100%',
    },
    divider: {},

    // slider and input
    rowInput: {
        display: 'flex',
        alignItems: 'center',
    },
    select: {
        width: '100%',
    },
    sliderWrapper: {
        display: 'none',
        flex: 1,
        paddingRight: theme.spacing.unit * 3,
    },

    input: {
        display: 'block',
        flex: [0, 0, '100%'],
    },

    [theme.breakpoints.up('md')]: {
        sliderWrapper: {
            display: 'block',
        },
        input: {
            flex: [0, 0, '120px'],
        },
    },
});


const CalculatorRevenue = ({
    minWaves,
    maxWaves,
    classes,
    total,
    waves,
    mrt,
    intl,

    // state
    amount,
    term,
    onAmountChange,
    onTermChange,
}) => {
    
    const handleInputChange = e => onAmountChange(e.target.value);
    

    return (
        <Panel>
            <Typography type="body">
                <FormattedMessage
                    id="calcRevenue.totalAmount"
                    defaultMessage="Total amount of waves"
                />
            </Typography>

            <Margin top={1} bottom={2} className={classes.rowInput}>
                <div className={classes.sliderWrapper}>
                    <ScaledSlider
                        transform={transform}
                        reverse={reverse}
                        min={minWaves}
                        max={maxWaves}
                        value={amount}
                        onChange={onAmountChange}
                        stepsNumber={300}
                    />
                </div>
                <Input
                    /* placeholder={intl.formatMessage()} */
                    className={classes.input}
                    secondary
                    onChange={handleInputChange}
                    value={amount}
                    type="number"
                />
            </Margin>

            <Margin>
                <Typography type="body">
                    <FormattedMessage
                        id="calcRevenue.miningTerm"
                        defaultMessage="Mining term"
                    />
                </Typography>
                <Margin bottom={1} />

                <Hidden mdUp>
                    <Select
                        className={classes.select}
                        options={timeOptions(intl)}
                        value={term}
                        onSelect={onTermChange}
                    />
                </Hidden>

                <Hidden smDown>
                    <ButtonGroup
                        className={classes.buttonGroup}
                        options={timeOptions(intl)}
                        value={term}
                        onSelect={onTermChange}
                    />
                </Hidden>
            </Margin>

            <Margin top={3} bottom={3}>
                <Divider />
            </Margin>

            {/* <Result /> */}
        </Panel>
    );
};

CalculatorRevenue.defaultProps = {
    minWaves: 0.02,
    maxWaves: 100000000,
};

export default compose(injectSheet(styles), injectIntl)(CalculatorRevenue);
