import React from 'react';
// import styles from './styles';

import Typography from 'src/common/components/Typography';



import { EMPTY, EMAIL_INVALID } from '../../../../public/utils/validation/rules';



const Empty = () => <Typography color="gray-0">Пожалуйста, введите email</Typography>
const EmailInvalid = () => <Typography color="gray-0">Неверный адрес email</Typography>


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