import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';
import styles from './styles';




const List = ({
    items,
    typographyType,
    classes
}) => (
        <ul className={classes.list}>
            {items.map((item, index) => (
                <li key={`list_item_${index}`} className={classes.item}>
                    <Typography type={typographyType} className={classes.bulleted}>
                        {item}
                    </Typography>
                </li>
            ))}
        </ul>
    )


List.defaultProps = {
    typographyType: 'body'
}

List.propTypes = {
    typographyType: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node)
}



export default injectSheet(styles)(List);