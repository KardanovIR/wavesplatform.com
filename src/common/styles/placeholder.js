export default {
    // borderRadius: 15,
    outline: '6px dashed #e7e7e7',
    outlineOffset: -6,
    position: 'relative',
    '&:before': {
        content: '"Placeholder"',
        fontSize: 27,
        color: '#dadada',
        fontWeight: 700,
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)' 
    }
}