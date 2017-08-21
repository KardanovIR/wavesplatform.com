export default breakpoints => ({
    atMedia: size => `@media (min-width: ${breakpoints[size]}px)`
})