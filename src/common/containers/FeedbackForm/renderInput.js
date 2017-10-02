import React from 'react';
import Input from 'src/common/components/Input';


const renderInput = ({ input, meta: { touched, error }, ...custom }) => (
    <Input
        invalid={touched && error}
        {...input}
        {...custom}
    />
)

export default renderInput;