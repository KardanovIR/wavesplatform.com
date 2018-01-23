import {
  GET_CLIENT_CLICK,
  NEW_CLIENT_CLICK,
  GET_WAVES_CLICK,
  ONLINE_CLIENT_CLICK,
  ANDROID_CLIENT_CLICK,
  IOS_CLIENT_CLICK,
  API_DOCUMENTATION_CLICK,
  API_CLIENT_CLICK,
  WAVES_NODE_CLICK,
  WAVES_NODE_INSTALL_CLICK,
  DEX_API_CLICK,
  WHITEPAPER_DOWNLOAD,
  BRANDING_PACKAGE_DOWNLOAD,
  SUBMIT_RESUME_CLICK,
  SUBSCRIBE,
  FEEDBACK_FORM_SUBMIT,
} from 'src/public/actions';

const PRODUCT = 'Product';
const DEVELOPERS = 'Developers';
const DOWNLOAD = 'Download';
const CONTACT = 'Contact';

const categoryMap = {
  [GET_CLIENT_CLICK]: PRODUCT,
  [NEW_CLIENT_CLICK]: PRODUCT,
  [GET_WAVES_CLICK]: PRODUCT,
  [ONLINE_CLIENT_CLICK]: PRODUCT,
  [ANDROID_CLIENT_CLICK]: PRODUCT,
  [IOS_CLIENT_CLICK]: PRODUCT,

  [API_DOCUMENTATION_CLICK]: DEVELOPERS,
  [API_CLIENT_CLICK]: DEVELOPERS,
  [WAVES_NODE_CLICK]: DEVELOPERS,
  [WAVES_NODE_INSTALL_CLICK]: DEVELOPERS,
  [DEX_API_CLICK]: DEVELOPERS,

  [WHITEPAPER_DOWNLOAD]: DOWNLOAD,
  [BRANDING_PACKAGE_DOWNLOAD]: DOWNLOAD,

  [SUBMIT_RESUME_CLICK]: CONTACT,
  [SUBSCRIBE]: CONTACT,
  [FEEDBACK_FORM_SUBMIT]: CONTACT,
};

export default store => next => action => {
  if (action.log && window._paq) {
    window._paq.push([
      'trackEvent',
      categoryMap[action.type],
      action.type,
      ...(action.page && action.source
        ? [`${action.page}.${action.source}`]
        : []),
    ]);
  }
  next(action);
};
