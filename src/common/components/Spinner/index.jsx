import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import cn from 'classnames';



const styles = theme => ({
    spinner: {
        width: ({ size }) => size,
        height: ({ size }) => size,

        background: ({ color }) => theme.palette.getColor(color),
        borderRadius: '50%',
    }
})

class Spinner extends PureComponent {
    render() {
        const { classes, className } = this.props;
        return <div className={cn(classes.wrapper, className)} />;
    }
}

Spinner.defaultProps = {
    color: 'gray-50',
    size: 20
}

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
}


export default injectSheet(styles)(Spinner);