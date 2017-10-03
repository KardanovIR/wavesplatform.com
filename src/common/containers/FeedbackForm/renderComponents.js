import React from 'react';
import Input from 'src/common/components/Input';
import Select from 'src/common/components/Select';


export const renderSelect = ({ input, ...custom }) => (
    <Select
        {...input}
        {...custom}
    />
)


export const renderInput = ({ input, meta: { touched, error }, ...custom }) => (
    <Input
        invalid={touched && error}
        {...input}
        {...custom}
    />
)