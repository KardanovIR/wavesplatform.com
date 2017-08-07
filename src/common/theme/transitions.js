export default {
    duratonShort: 150,
    duratonMedium: 300,
    duratonLong: 500,
    create: (property, duration = 150) => `${duration}ms ${property} ease-in-out`
}