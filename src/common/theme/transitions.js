const createSingleTransition = (property, duration = 150) => `${duration}ms ${property} ease-in-out`;


const createTransition = (properties, duration = 150) => {
    // if single
    if (typeof properties === 'string') return createSingleTransition(properties, duration);

    // if multiple
    return properties
        .map(prop => createSingleTransition(prop, duration))
        .join(', ');
}



export default {
    duratonShort: 150,
    duratonMedium: 300,
    duratonLong: 500,
    create: createTransition
}