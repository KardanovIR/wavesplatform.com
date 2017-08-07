import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';


import { getColumnStyles } from './styles';



const styles = getColumnStyles;



const Column = ({
	classes,
    className: classNameProp,
    children,

    xs,
    sm,
    md,
    lg,
    xl,
}) => {
    const className = cn(
        classes.col,
        {
            [classes['xs']]: xs === true,
            [classes[`xs-${xs}`]]: xs && xs !== true,
            [classes['sm']]: sm === true,
            [classes[`sm-${sm}`]]: sm && sm !== true,
            [classes['md']]: md === true,
            [classes[`md-${md}`]]: md && md !== true,
            [classes['lg']]: lg === true,
            [classes[`lg-${lg}`]]: lg && lg !== true,
            [classes['xl']]: xl === true,
            [classes[`xl-${xl}`]]: xl && xl !== true,
        },
        classNameProp,
    );


    return (
        <div className={className}>
            {children}
        </div>
    );
}



export default injectSheet(styles)(Column);