import React from 'react';

import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import Input from 'src/common/components/Input';
import Typography from 'src/common/components/Typography';
import ButtonGroup from 'src/common/components/ButtonGroup';
import Divider from 'src/common/components/Divider';
import Slider from 'src/common/components/Slider';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import timeOptions from './lib/timeOptions';
import Result from './lib/Result';

import injectSheet from 'react-jss';

const styles = theme => ({
    buttonGroup: {
        width: '100%',
    },
    divider: {},

    inlineBlock: {
        display: 'inline-block',
    },
    resultTitle: {
        marginBottom: theme.spacing.unit,
    },
    currency: {
        color: theme.palette.primary[700],
    },
    textBlock: {
        composes: '$inlineBlock',
        whiteSpace: 'nowrap',
        lineHeight: 2,
    },
    sign: {
        color: theme.palette.gray[400],
    },
});

const CalculatorRevenue = ({
    minWaves,
    maxWaves,
    classes,
    total,
    waves,
    mrt,
}) => (
    <Panel>
        <Typography type="body">
            <FormattedMessage
                id="calcRevenue.totalAmount"
                defaultMessage="Total amount of waves"
            />
        </Typography>



        <Margin top={1} bottom={2}>
            <Slider />
            <Input type="number" />
        </Margin>

        <Margin>
            <Typography type="body">
                <FormattedMessage
                    id="calcRevenue.miningTerm"
                    defaultMessage="Mining term"
                />
            </Typography>
            <Margin bottom={1} />
            <ButtonGroup
                className={classes.buttonGroup}
                options={timeOptions}
                value="1y"
                onChange={v => console.log(v)}
            />
        </Margin>

        <Margin top={3} bottom={3}>
            <Divider />
        </Margin>


    </Panel>
);

CalculatorRevenue.defaultProps = {
    minWaves: 0.02,
    maxWaves: 100000000,
    waves: 12.11,
    mrt: 1245.77,
    total: 12050,
};

export default injectSheet(styles)(CalculatorRevenue);
