import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Panel from 'src/common/components/Panel';
import IconProduct from 'src/common/components/IconProduct';



import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1
    },
    icon: {
        flex: 0,
        margin: [0, 'auto', theme.spacing.unit * 3]
    },
    link: {
        flex: 0
    },
    title: {
        flex: 1
    }
})



const MainScreen = ({
    classes,
    className,
    iconName,
    title,
    resource,
    href,
}) => (
    <Panel className={cn(classes.wrapper, className)}>
        <Typography className={classes.link} align="center">
            <Link target="_blank" href={href}>
                { resource }
            </Link>
        </Typography>
        <Margin bottom={1} className={classes.title}>
            <Typography type="display1" align="center">{ title }</Typography>
        </Margin>
        <IconProduct size={40} className={classes.icon} name={iconName} />
    </Panel>
);


export default injectSheet(styles)(MainScreen);