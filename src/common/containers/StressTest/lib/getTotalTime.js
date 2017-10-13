export default timestamp => {
    return {
        minutes: Math.floor(timestamp / (1000 * 60)),
        seconds: (timestamp % (1000 * 60)) / 1000,
    }
}