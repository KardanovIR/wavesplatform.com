import React from 'react';

import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import Input from 'src/common/components/Input';
import Typography from 'src/common/components/Typography';
import ButtonGroup from 'src/common/components/ButtonGroup';
import Select from 'src/common/components/Select';
import Divider from 'src/common/components/Divider';
import Slider from 'src/common/components/Slider';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { compose } from 'ramda';

import timeOptions from './lib/timeOptions';
import Result from './lib/Result';

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
    intl
}) => (
    <Panel>
        <Typography type="body">
            <FormattedMessage
                id="calcRevenue.totalAmount"
                defaultMessage="Total amount of waves"
            />
        </Typography>

        <Margin top={1} bottom={2} className={classes.rowInput}>
            <div className={classes.sliderWrapper}>
                <Slider />
            </div>
            <Input className={classes.input} secondary onChange={v => console.log(v)} type="number" />
        </Margin>

        <Margin>
            <Typography type="body">
                <FormattedMessage
                    id="calcRevenue.miningTerm"
                    defaultMessage="Mining term"
                />
            </Typography>
            <Margin bottom={1} />
            <Select
                options={timeOptions(intl)}
                value="1y"
                onSelect={v => console.log('Select', v)}
            />
            <ButtonGroup
                className={classes.buttonGroup}
                options={timeOptions(intl)}
                value="1y"
                onChange={v => console.log(v)}
            />
        </Margin>

        <Margin top={3} bottom={3}>
            <Divider />
        </Margin>

        <Result />
    </Panel>
);

CalculatorRevenue.defaultProps = {
    minWaves: 0.02,
    maxWaves: 100000000,
    waves: 12.11,
    mrt: 1245.77,
    total: 12050,
};

export default compose(
    injectSheet(styles),
    injectIntl
)(CalculatorRevenue);
