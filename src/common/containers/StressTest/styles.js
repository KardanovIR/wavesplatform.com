export default ({ spacing, palette, transitions }) => ({
    centerWrapper: {
        textAlign: 'center'
    },
    fixedWidth: {
        width: 150
    },
    barWrapper: {
        marginBottom: spacing.unit
    },
    bar: {
        composes: '$fixedWidth',
        display: 'inline-block',
        height: spacing.unit * 6,
        border: `1px dashed ${palette.gray[400]}`,
    },
    inner: {
        height: '100%',
        width: '100%',
        transformOrigin: 'top left',
        transition: transitions.create('transform')
    },
    confirmed: {
        composes: '$bar'
    },
    unconfirmed: {
        composes: '$bar'
    },
    confirmedInner: {
        composes: '$inner',
        background: '#64ca57',
        // transform: ({ utx, confirmed }) => `scaleX(${confirmed / (utx + confirmed)})`
        transform: ({ utx, confirmed }) => `scaleX(${utx / (confirmed + confirmed || 100)})`
    },
    unconfirmedInner: {
        composes: '$inner',
        background: palette.orange[300],
        transform: ({ utx, confirmed }) => `scaleX(${utx / (utx + confirmed || 100)})`
    }
})