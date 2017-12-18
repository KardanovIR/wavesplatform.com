const check = varName => {
  if (!process.env[varName]) {
    throw new Error(`No ${varName} env variable provided`);
  }
};

export default varNameOrArr => {
  if (typeof varNameOrArr === 'string') return check(varNameOrArr);
  varNameOrArr.forEach(name => check(name));
};
