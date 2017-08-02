import React from 'react';
// import styles from './styles';


import { EMPTY, EMAIL_INVALID } from '../../../../public/utils/validation/rules';


const Empty = () => <span>Пожалуйста, введите email</span>
const EmailInvalid = () => <span>Неверный адрес email</span>


const ErrorMessage = ({ errors }) => {
    if (~errors.indexOf(EMPTY)) {
        return <Empty />
    }

    if (~errors.indexOf(EMAIL_INVALID)) {
        return <EmailInvalid />
    }

    return null;
}

export default ErrorMessage;