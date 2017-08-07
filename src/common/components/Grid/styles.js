const getStylesForBreakpoint = (theme, breakpoint) => {
    const styles = {
        [breakpoint]: {
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: '100%',
        }
    };

    for (let size = 1; size <= 12; size++) {
        const width = `${Math.round(size / 12 * Math.pow(10, 6)) / Math.pow(10, 4)}%`;

        styles[`${breakpoint}-${size}`] = {
            flexBasis: width,
            maxWidth: width,
            padding: theme.spacing.getSpacing(0, 1)
        };
    }

    return styles;
}


export const getColumnStyles = theme => {
    const styles = {
        col: {
            boxSizing: 'border-box',
            flex: '0 0 auto',
        },
        ...getStylesForBreakpoint(theme, theme.breakpoints.names[0])
    }

    theme.breakpoints.names.slice(1).forEach(breakpoint => {
        styles[theme.mixins.atMedia(breakpoint)] = getStylesForBreakpoint(theme, breakpoint);
    })

    return styles;
}