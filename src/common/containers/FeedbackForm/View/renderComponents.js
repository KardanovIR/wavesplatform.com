import React from 'react';
import Input from 'src/common/components/Input';
import Select from 'src/common/components/Select';


export const renderSelect = ({ input, meta: { touched, error }, ...custom }) => (
    <Select
        invalid={touched && error}
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