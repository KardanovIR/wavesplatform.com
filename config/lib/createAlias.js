module.exports = ({ production = false } = {}) =>
    production ? {} : {
        'src/common/containers/Main': 'config/lib/NoopReact',
        'src/common/containers/Developers': 'config/lib/NoopReact',
        'src/common/containers/Company': 'config/lib/NoopReact',
        'src/common/containers/Product': 'config/lib/NoopReact',
    }