let interacted = false;

export default store => next => action => {
  if (
    window.dataLayer &&
    !interacted &&
    ~['ChangeTerm', 'ChangeAmount'].indexOf(action.type)
  ) {
    window.dataLayer.push({
      event: 'RevenueCalculatorInteraction',
      page: 'mining/leasing',
      'page-section': 'revenue',
    });
    interacted = true;
  }
  next(action);
};
