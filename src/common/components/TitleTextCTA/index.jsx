import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';


import injectSheet from 'react-jss';
import styles from './styles';




const TitleTextCTA = ({
    classes,
    className,
    title,
    titleType,
    text,
    inverted,
    buttons
}) => (
        <div className={className}>
            <div className={classes.title}>
                <Typography inverted={inverted} type={titleType}>
                    {title}
                </Typography>
            </div>


            <div className={classes.text}>
                <Typography inverted={inverted} type="body2" cut>
                    {text}
                </Typography>
            </div>


            <div>
                {buttons.map((button, index) => (
                    <div className={classes.buttonWrapper} key={`cta_button_wrapper_${index}`}>
                        { button }
                    </div>
                ))}
            </div>
        </div>
    )


TitleTextCTA.defaultProps = {
    titleType: 'display4',
    buttons: []
}

TitleTextCTA.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.node),
    titleType: PropTypes.string,
    title: PropTypes.string.isRequired
}



export default injectSheet(styles)(TitleTextCTA);