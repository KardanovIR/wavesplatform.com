const isValidMeasure = measure =>
    typeof measure === 'number';

const getSpacing = unit => (top, right, bottom, left) => {
    const spacing = {
        top: isValidMeasure(top) ? `${top * unit}px` : '',
        right: isValidMeasure(right) ? ` ${right * unit}px ` : '',
        bottom: isValidMeasure(bottom) ? ` ${bottom * unit}px ` : '',
        left: isValidMeasure(left) ? ` ${left * unit}px ` : ''
    }
    return spacing.top + spacing.right + spacing.bottom + spacing.left;
}



const createSpacing = ({ unit = 8, radius = 4, inputHeight = 40 } = {}) => ({
    unit,
    radius,
    inputHeight,
    getSpacing: getSpacing(unit)
})



export default createSpacing;