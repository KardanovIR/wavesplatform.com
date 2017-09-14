import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import injectSheet from 'react-jss';
import styles from './styles';




const TitleTextCTA = ({
    classes,
    className,
    title,
    titleType,
    text,
    textType,
    inverted,
    buttons
}) => (
        <div className={className}>
            <Typography inverted={inverted} type={titleType}>
                {title}
            </Typography>
            <Typography inverted={inverted} type={textType} cut>
                {text}
            </Typography>

            { !!buttons.length && <Margin bottom={3} /> }
            
            <div>
                {buttons.map((button, index) => (
                    <div className={classes.buttonWrapper} key={`cta_button_wrapper_${index}`}>
                        {button}
                    </div>
                ))}
            </div>
        </div>
    )


TitleTextCTA.defaultProps = {
    titleType: 'display4',
    textType: 'body',
    buttons: []
}

TitleTextCTA.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.node),
    titleType: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}



export default injectSheet(styles)(TitleTextCTA);