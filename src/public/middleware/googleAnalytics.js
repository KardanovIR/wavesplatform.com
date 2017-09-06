export default store => next => action => {
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': action.type,
            'page': action.page,
            'page-section': action.source,
        });
    }
    next(action);
}