import { isEmpty, isEmailInvalid } from 'src/public/utils/validation';
import createValidation from 'src/public/utils/validation/create';


const rules = {
    email: [isEmpty, isEmailInvalid],
    message: [isEmpty]
}




export default values => {
    const results = createValidation(rules)(values);
    console.log(rules, values, results);
    return results;
};