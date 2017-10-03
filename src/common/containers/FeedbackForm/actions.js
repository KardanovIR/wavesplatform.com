export const SUBMIT = 'Submit';
export const SUCCESS = 'Success';
export const ERROR = 'Error';


const createAC = type => meta => ({ type, ...meta });


export const submit = (formData, meta) => ({
    type: SUBMIT,
    payload: formData,
    ...meta
})


export const success = createAC(SUCCESS);
export const error = createAC(ERROR);

