import React from 'react';

const Cross = ({ fill, size, style }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 34 34"
    xmlSpace="preserve"
    style={style}
  >
    <g>
      <g>
        <rect
          x="5.5"
          y="15.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.0415 16.9998)"
          fill={fill}
          width="23.1"
          height="3"
        />
      </g>
      <g>
        <rect
          x="15.5"
          y="5.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.0415 16.9998)"
          fill={fill}
          width="3"
          height="23.1"
        />
      </g>
    </g>
  </svg>
);

export default Cross;
