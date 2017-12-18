const { promisify } = require('util');
const { readFile } = require('fs');

const readFileAsync = promisify(readFile);

const readAssets = async (ctx, next) => {
  if (process.env.NODE_ENV === 'production') {
    await readFileAsync('./dist/assets.json')
      .then(text => (ctx.state.assets = JSON.parse(text)))
      .catch(err => {
        ctx.logger.error('Unable to read assets.json file');
        ctx.state.assets = {};
      });
  }

  await next();
};

export { readAssets };
