// rule creator
export const combineRules = rules => value =>
    rules
        .map(rule => rule(value))
        .filter(code => !!code);



export const validate = fieldsRules => {
    const results = {};

    Object.keys(fieldsRules).forEach(field => 
        fieldsRules[field].forEach)
}