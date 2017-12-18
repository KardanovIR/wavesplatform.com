import fetch from 'node-fetch';
import { handleFetchError } from 'src/common/utils/handleFetchError';

const fetchJson = (...args) =>
  fetch(...args)
    .then(handleFetchError)
    .then(res => res.json());

export { fetchJson };
export default fetchJson;
