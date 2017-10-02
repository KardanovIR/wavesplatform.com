import React from 'react';


const InputComponent = ({
    className,
    theme, // eslint-disable-line
    sheet, // eslint-disable-line
    type,
    ...rest
}) => (
        <input
            type={type}
            ref={el => this.input = el}
            className={className}
            {...rest}
        />
    )


InputComponent.defaultProps = {
    type: 'text'
}




export default InputComponent;