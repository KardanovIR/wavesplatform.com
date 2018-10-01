import 'whatwg-fetch';
import arrayFromPolyfill from 'array.from';
arrayFromPolyfill.shim();

Object.values =
  Object.values ||
  function(obj) {
    return Object.keys(obj).map(k => obj[k]);
  };
