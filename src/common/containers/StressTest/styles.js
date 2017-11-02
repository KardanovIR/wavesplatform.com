export default ({ spacing, palette, transitions }) => ({
    centerWrapper: {
        textAlign: 'center',
    },
    fixedWidth: {
        width: 150,
    },
    statusReport: {
        height: 122,
    },
    barWrapper: {
        marginBottom: spacing.unit,
    },
    bar: {
        composes: '$fixedWidth',
        display: 'inline-block',
        height: spacing.unit * 6,
        border: `1px dashed ${palette.gray[400]}`,
        position: 'relative',
    },
    inner: {
        height: '100%',
        width: '100%',
        transformOrigin: 'top left',
        transition: transitions.create('transform'),
    },
    unconfirmed: {
        composes: '$bar',
    },
    confirmed: {
        composes: '$bar',
    },
    unconfirmedInner: {
        composes: '$inner',
        background: palette.orange[300],
        transform: ({ unconfirmed, total }) =>
            `scaleX(${unconfirmed / (total || 10)})`,
    },
    confirmedInner: {
        composes: '$inner',
        background: '#64ca57',
        transform: ({ confirmed, total }) =>
            `scaleX(${confirmed / (total || 10)})`,
    },
    loader: {
        position: 'absolute',
        top: 6,
        left: '50%',
        transform: 'translateX(-50%)',
    },
    statusMessage: {
        marginTop: spacing.unit,
        height: 40,
    },
    legendWrapper: {
        margin: [10, 0],
        display: 'flex',
        alignItems: 'center',
    },
    legendTypeWrapper: {
        flex: 1,
    },
    legendNumberWrapper: {
        flex: 0,
    },
    legend: {
        display: 'inline-block',
        width: spacing.unit * 2,
        height: spacing.unit * 2,
        verticalAlign: '-10%',
        borderRadius: '50%',
        marginRight: spacing.unit,
    },
    unconfirmedLegend: {
        composes: '$legend',
        background: palette.orange[300],
    },
    confirmedLegend: {
        composes: '$legend',
        background: '#64ca57',
    },
    explorerButton: {
        float: 'right',
        marginTop: spacing.unit,
    }
});
