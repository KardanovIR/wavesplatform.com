export const EMAIL_CHANGE = 'EmailChange';
export const REASON_CHANGE = 'ReasonChange';
export const MESSAGE_CHANGE = 'MessageChange';

export const SUBMIT = 'Submit';
export const SHOW_ERRORS = 'ShowErrors';

export const VALIDATE = 'Validate';



const createAC = type => meta => ({ type, ...meta });



export const emailChange = (value, meta) => ({
    type: EMAIL_CHANGE,
    payload: value,
    ...meta
})

export const reasonChange = (value, meta) => ({
    type: REASON_CHANGE,
    payload: value,
    ...meta
})

export const messageChange = (value, meta) => ({
    type: MESSAGE_CHANGE,
    payload: value,
    ...meta
})

export const submit = createAC(SUBMIT);
export const showErrors = createAC(SHOW_ERRORS);

