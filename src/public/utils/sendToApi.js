import { handleFetchError } from 'src/common/utils/handleFetchError';


export default (endpoint, data) =>
    fetch(`/api/${endpoint}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(handleFetchError);