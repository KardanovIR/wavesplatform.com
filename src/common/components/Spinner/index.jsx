import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import cn from 'classnames';



const styles = theme => ({

    loader: {
        position: 'relative',
        margin: [0, 'auto'],
        width: '100%',
        height: '100%',
        '&:before': {
            content: '',
            display: 'block',
            paddingTop: '100%'
        }
    },

    circular: {
        animation: 'rotate 2s linear infinite',
        height: '100%',
        transformOrigin: 'center center',
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
    },

    path: {
        strokeDasharray: [1, 200],
        strokeDashoffset: 0,
        animation: 'dash 2.5s ease-in-out infinite',
        strokeLinecap: 'round',
        stroke: 'currentColor'
    },

    '@keyframes rotate': {
        '100%': {
            transform: 'rotate(360deg)'
        }
    },

    '@keyframes dash': {
        '0%': {
            strokeDasharray: [1, 200],
            strokeDashoffset: 0
        },
        '50%': {
            strokeDasharray: [89, 200],
            strokeDashoffset: -35
        },
        '100%': {
            strokeDasharray: [89, 200],
            strokeDashoffset: -124
        }
    }
})


class Spinner extends PureComponent {
    render() {
        const { classes, className, dark } = this.props;
        return (
            <div className={cn(classes.loader, className)}>
                <svg className={classes.circular} viewBox="25 25 50 50">
                    <circle
                        className={classes.path}
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                    />
                </svg>
            </div>
        )

    }
}


// Spinner.defaultProps = {
//     color: 'gray-50',
//     size: 20
// }

// Spinner.propTypes = {
//     color: PropTypes.string,
//     size: PropTypes.number,
// }


export default injectSheet(styles)(Spinner);