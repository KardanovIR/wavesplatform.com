import sendToApi from 'src/public/utils/sendToApi';

export const SUBMIT = 'Submit';
export const SUCCESS = 'Success';
export const ERROR = 'Error';

const createAC = type => meta => ({ type, ...meta });

export const submit = (formData, meta) => ({
  type: SUBMIT,
  payload: formData,
  ...meta,
});

export const success = createAC(SUCCESS);
export const error = createAC(ERROR);

export const sendForm = formData => {
  return dispatch => {
    dispatch(submit(formData));

    sendToApi('feedback', formData)
      .then(() => dispatch(success()))
      .catch(err => {
        console.warn(err);
        dispatch(error());
      });
  };
};
