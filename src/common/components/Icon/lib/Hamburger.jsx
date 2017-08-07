import React from 'react';


const Hamburger = fill => (
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		width="100%" height="100%" viewBox="0 0 34 34" xmlSpace="preserve">
		<g>
			<g>
				<rect x="5.5" y="15.5" fill={fill} width="23" height="3" />
			</g>
			<g>
				<rect x="5.5" y="22.5" fill={fill} width="23" height="3" />
			</g>
			<g>
				<rect x="5.5" y="8.5" fill={fill} width="23" height="3" />
			</g>
		</g>
	</svg>
)


export default Hamburger;