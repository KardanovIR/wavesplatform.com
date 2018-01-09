import React, { Component } from 'react';
import pt from 'prop-types';

import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import Input from 'src/common/components/Input';
import Typography from 'src/common/components/Typography';
import ButtonGroup from 'src/common/components/ButtonGroup';
import Select from 'src/common/components/Select';
import Divider from 'src/common/components/Divider';
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

class CalculatorRevenue extends Component {
  static propTypes = {
    IncorrectAmountText: pt.func,
    onAmountChange: pt.func.isRequired,
    onAmountBlur: pt.func.isRequired,
  };
  static defaultProps = {
    IncorrectAmountText: () => null
  };
  componentDidMount() {
    this.props.onAmountChange(this.props.initialValue);
  }

  static defaultProps = {
    mrtWavesPrice: 0.02,
    initialValue: 10000,
  };

  handleInputChange = e => this.props.onAmountChange(e.target.value);

  handleBlur = () => this.props.onAmountBlur(this.props.amount);
  render() {
    const {
      minWaves,
      maxWaves,
      classes,
      waves,
      mrt,
      mrtWavesPrice,
      intl,

      amount,
      term,
      onAmountChange,
      onTermChange,
      IncorrectAmountText
    } = this.props;

    return (
      <Panel>
        <Typography type="body">
          <FormattedMessage id="calcRevenue.totalAmount" />
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
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            value={amount}
            min={minWaves}
            max={maxWaves}
            type="number"
          />
        </Margin>

        <Margin>
          <Typography type="body">
            <FormattedMessage id="calcRevenue.miningTerm" />
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

          <Hidden mdDown>
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

        {
          amount >= minWaves && amount <= maxWaves
          ? <Result total={mrt * mrtWavesPrice} waves={waves} mrt={mrt} />
          : <IncorrectAmountText min={minWaves} />
        }
      </Panel>
    );
  }
}

export default compose(injectSheet(styles), injectIntl)(CalculatorRevenue);
