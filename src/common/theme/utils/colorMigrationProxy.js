import isProd from 'src/server/utils/isProd';


export default (colorObj, colorName) =>
    isProd() ? colorObj : new Proxy(
        colorObj,
        {
            get: function (target, key) {
                if (!target[key]) {
                    console.warn(`Color ${colorName}-${key} does not exist.`);
                }
                return target[key];
            }
        }
    )