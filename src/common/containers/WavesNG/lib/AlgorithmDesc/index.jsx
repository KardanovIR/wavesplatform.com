import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';


import injectSheet from 'react-jss';
const styles = {
    wrapper: {
        height: '100%'
    }
}


const AlgorithmDesc = ({
    title,
    text,
    image,
    children,
    classes
}) => (
        <Panel className={classes.wrapper}>
            <Typography type="display1" tagName="div">
                {title}
            </Typography>
            <Margin bottom={3} />
            {image}
            <Margin />
            <Typography type="body" tagName="div">
                {text}
            </Typography>
            <Margin />
            {children}
        </Panel>
    )



export default injectSheet(styles)(AlgorithmDesc);