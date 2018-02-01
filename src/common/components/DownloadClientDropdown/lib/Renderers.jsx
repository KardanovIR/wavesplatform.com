import React from 'react';
import injectSheet from 'react-jss';
import Button from 'src/common/components/Button';
import { FormattedMessage } from 'react-intl';
import Arrow from '!svg-react-loader!./arrow.svg';

const optionStyles = () => ({
  button: {
    width: '100%',
    overflow: 'hidden',
  },
});

@injectSheet(optionStyles)
class OptionRenderer extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };
  render() {
    const { option, className, classes } = this.props;
    return (
      <div className={className} onClick={this.handleClick}>
        <Button
          href={option.link}
          className={classes.button}
          {...(option.link ? { target: '_blank' } : {})}
          whited
          coloredHover
        >
          <FormattedMessage id={option.label} />
        </Button>
      </div>
    );
  }
}

const buttonStyles = ({ spacing }) => ({
  button: {
    width: '100%',
    overflow: 'hidden',
    '& > *': {
      position: 'relative',
      left: -0.5 * spacing.unit, //visual aid
    },
  },
});

const ValueRenderer = injectSheet(buttonStyles)(
  ({ classes, children: label }) => {
    return (
      <Button className={classes.button} secondary coloredHover>
        <FormattedMessage id={label} />
      </Button>
    );
  }
);



const styleTransition = { transition: 'transform .1s ease-in' };
const styleRotate = { transform: 'rotate(180deg)' };
const ArrowRenderer = ({ isOpen }) =>
  isOpen ? (
    <Arrow style={{ ...styleTransition, ...styleRotate }} />
  ) : (
    <Arrow style={{ ...styleTransition }} />
  );

export { OptionRenderer, ValueRenderer, ArrowRenderer };