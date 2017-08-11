import breakpoints from '../breakpoints';

export const combineMobileDesktopStyles = (mobileStyles, desktopStyles) => ({
    ...mobileStyles,
    [`@media (min-width: ${breakpoints.md}px)`]: {
        ...desktopStyles
    }
});