import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';



const styles = theme => ({
    buttonWrapper: {
        marginBottom: theme.spacing.unit * 2,
    },
    'button-wrapper-left': {
        composes: '$buttonWrapper',
    },
    'button-wrapper-right': {
        composes: '$buttonWrapper',
    },

    [theme.mixins.atMedia('md')]: {
        rowRight: {
            flexDirection: 'row-reverse'
        },
        'button-wrapper-left': {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: theme.spacing.unit * 2,
        },
        'button-wrapper-right': {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: theme.spacing.unit * 2,
        },

        'text-left': {
            paddingLeft: theme.spacing.unit * 4,
            paddingRight: '10%'
        },
        'text-right': {
            paddingRight: theme.spacing.unit * 4,
            paddingLeft: '10%',
            textAlign: 'right',
        },

        mdAlignCenter: {
            textAlign: 'center'
        }
    }
})


const PictureBlock = ({
    classes,
    title,
    subtitle,
    image,
    text,
    buttons,
    align,
}) => (
    <div>
        <Row className={align === 'right' ? classes.rowRight : ''} style={{ alignItems: 'flex-start' }}>
            <Col xs={12}>
                <Row centered> 
                    <Col xs={12} md={8} lg={7}>
                        <Typography type="display2" className={classes.mdAlignCenter}>
                            { title }
                        </Typography>
                        <Typography type="body2" className={classes.mdAlignCenter}>
                            { subtitle }
                        </Typography>
                        <Margin bottom={4} />
                    </Col>
                </Row>
            </Col>

            <Col xs={12} sm={8} md={6} lg={6}>
                { image }
            </Col>

            <Col xs={12} md={6} lg={6} className={classes[`text-${align}`]}>
                { typeof text === 'string' ? (
                    <Typography type="body">
                        { text }
                    </Typography>
                ) : (
                    text.map((p, i) => <Typography type="body" key={`paragraph_${i}`}>{p}</Typography>)
                ) }

                <Margin bottom={3} />

                { buttons.map((button, index) => (
                    <div className={classes[`button-wrapper-${align}`]} key={`devs_block_button_${index}`}>
                        { button }
                    </div>
                )) }
            </Col>
        </Row>
    </div>
);


PictureBlock.defaultProps = {
    align: 'left'
}

PictureBlock.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
}


export default injectSheet(styles)(PictureBlock);