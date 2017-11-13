import 'rc-slider/assets/index.css';

import React from 'react';
import RcSlider, { createSliderWithTooltip } from 'rc-slider';

import Typography from 'src/common/components/Typography';

const RcSliderWithTooltip = createSliderWithTooltip(RcSlider);

import injectSheet from 'react-jss';

const styles = ({palette}) => ({
    '@global': {
        '.rc-slider-handle': {
            border: `solid 4px ${palette.primary[500]}`,
            '&:active': {
                boxShadow: [0, 0, 5, palette.primary[500]],
            },
            '&:active, &:hover': {
                borderColor: palette.lighten(palette.primary[500], 20)
            }
        },
    },
});

const Slider = ({ theme, sheet, trackStyle, ...rest }) => (
    <Typography type="body" tanName="span">
        <RcSliderWithTooltip
            {...rest}
            trackStyle={{
                background: theme.palette.primary[500],
                ...trackStyle,
            }}
        />
    </Typography>
);

export default injectSheet(styles)(Slider);
