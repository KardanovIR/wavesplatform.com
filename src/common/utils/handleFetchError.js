const handleFetchError = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export default handleFetchError;
export { handleFetchError };