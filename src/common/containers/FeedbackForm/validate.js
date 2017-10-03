import { isEmpty, isEmailInvalid } from 'src/public/utils/validation';
import createValidation from 'src/public/utils/validation/create';


const rules = {
    email: [isEmpty, isEmailInvalid],
    message: [isEmpty],
    reason: [isEmpty],
}



export default createValidation(rules);