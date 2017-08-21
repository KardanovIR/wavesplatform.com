import React from 'react';
// import styles from './styles';

import Typography from 'src/common/components/Typography';



import { EMPTY, EMAIL_INVALID } from '../../../../public/utils/validation/rules';



const Empty = () => <Typography inverted>Please enter an email address</Typography>
const EmailInvalid = () => <Typography inverted>Invalid email address</Typography>


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