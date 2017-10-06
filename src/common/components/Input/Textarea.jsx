import React from 'react';


const TextareaComponent = ({
    className,
    theme, // eslint-disable-line
    sheet, // eslint-disable-line
    inputRef,
    ...rest
}) => (
        <textarea
            ref={inputRef}
            className={className}
            {...rest}
        />
    )



TextareaComponent.defaultProps = {
    inputRef: () => {},
    rows: 4
}




export default TextareaComponent;