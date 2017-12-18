import React from 'react';
import Slider from 'src/common/components/Slider';

import { compose } from 'ramda';

const ScaledSlider = ({
  value,
  onChange,
  transform,
  reverse,
  min,
  max,
  stepsNumber,
  step, // eslint-disable-line
  tipFormatter,
  ...rest
}) => {
  const handleSlider = val => onChange(transform(val));
  const scaledMin = reverse(min);
  const scaledMax = reverse(max);
  const scaledTipFormatter = compose(tipFormatter, transform);

  return (
    <Slider
      value={reverse(value)}
      onChange={handleSlider}
      min={scaledMin}
      max={scaledMax}
      step={(scaledMax - scaledMin) / stepsNumber}
      tipFormatter={scaledTipFormatter}
      {...rest}
    />
  );
};

ScaledSlider.defaultProps = {
  min: 0,
  max: Math.pow(10, 6),
  stepsNumber: 100,
  tipFormatter: v => v,
};

export default ScaledSlider;
