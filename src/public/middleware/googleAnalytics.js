export default store => next => action => {
  if (action.log && window.dataLayer) {
    window.dataLayer.push({
      event: action.type,
      page: action.page,
      'page-section': action.source,
    });
  }
  next(action);
};
