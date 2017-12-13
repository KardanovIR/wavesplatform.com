import canUseDOM from './canUseDOM';

export function isIE() {
  if (!canUseDOM) {
    return false;
  }

  var regex,
    isIE = false,
    UA = navigator.userAgent;

  if (navigator.appName === 'Microsoft Internet Explorer') {
    regex = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
    null !== regex.exec(UA) && (isIE = parseFloat(RegExp.$1));
  }

  if ('Netscape' === navigator.appName) {
    regex = new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');
    null !== regex.exec(UA) && (isIE = parseFloat(RegExp.$1));
  }

  return isIE;
}

export function isEdge() {
  return canUseDOM && navigator.userAgent.toLowerCase().indexOf('edge/') > -1;
}

const IS_MS = canUseDOM && (isIE() || isEdge());

export default IS_MS;
