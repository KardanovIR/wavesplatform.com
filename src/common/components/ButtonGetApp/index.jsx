import React from 'react';
import PropTypes from 'prop-types';


import Button from '../Button';
import Icon from 'src/common/components/Icon';


import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = (theme) => ({
    button: {
        padding: [
            theme.spacing.unit * 1.5,
            theme.spacing.unit * 3
        ],
        height: 'auto',
    },
    text: {
        ...theme.typography.button,
        lineHeight: 1.2,
        textTransform: 'none'
    }
})



const ButtonGetApp = ({
    classes,
    className,
    type,
    ...rest
}) => (
    <Button
        icon={
            type === 'google-play'
                ? <Icon size={28} name="googlePlay" />
                : <Icon size={32} name="apple" />
        }
        className={cn(classes.button, className)}
        href={type === 'google-play' ? 'https://google.com' : 'https://apple.com'}
        target="_blank"
        { ...rest}
    >
        <span className={classes.text}>
            Get it on
            <br />
            {type === 'google-play' ? 'GOOGLE PLAY' : 'APP STORE'}
        </span>
    </Button>
)



ButtonGetApp.PropTypes = {
    type: PropTypes.oneOf(['app-store', 'google-play']).isRequired,
}


export default injectSheet(styles)(ButtonGetApp);