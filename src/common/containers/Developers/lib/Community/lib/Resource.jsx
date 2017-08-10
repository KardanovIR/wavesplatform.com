import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Panel from 'src/common/components/Panel';



import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1
    },
    link: {
        flex: 0
    },
    title: {
        flex: 1
    }
}



const MainScreen = ({
    classes,
    className,
    title,
    resource,
    href
}) => (
    <Panel className={cn(classes.wrapper, className)}>
        <Typography className={classes.link} color="gray-500">
            <Link target="_blank" href={href}>
                { resource }
            </Link>
        </Typography>
        <Margin className={classes.title}>
            <Typography type="display1">{ title }</Typography>
        </Margin>        
    </Panel>
);


export default injectSheet(styles)(MainScreen);