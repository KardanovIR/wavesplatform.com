import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Typography from '../Typography';
import Icon from '../Icon';


const styles = theme => ({
    wrapper: {
        display: 'flex'
    },
    icon: {
        width: 30,
        background: '#fafafa',
        borderRadius: '50%',
        paddingRight: theme.spacing.unit
    }
})



const NumeralDemo = ({ classes, iconName, number, text }) => (
    <div className={classes.wrapper}>
        <div className={classes.icon}>
            <Icon name={iconName} size={30} />
        </div>
        <div>
            <Typography type="numeral" tagName="div">
                <span dangerouslySetInnerHTML={{ __html: number.toLocaleString('en').replace(/,/g, '&thinsp;') }} />
            </Typography>
            <Typography type="body" tagName="div">
                { text }
            </Typography>
        </div>
    </div>
)

NumeralDemo.defaultProps = {
    iconName: 'hamburger',
    number: '123123',
    text: 'Waves token value'
}

NumeralDemo.propTypes = {
    number: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string
}


export default injectSheet(styles)(NumeralDemo);