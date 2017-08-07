import breakpoints from './breakpoints';

export default {
    atMedia: (size) => `@media (min-width: ${breakpoints[size]}px)`
}