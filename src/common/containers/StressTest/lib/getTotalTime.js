export default timestamp => {
  const date = new Date(timestamp);

  return {
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    centiSeconds: Math.floor(date.getMilliseconds() / 10),
  };
};
