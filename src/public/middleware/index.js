import { applyMiddleware, compose } from 'redux';
import googleAnalytics from './googleAnalytics';
import piwik from './piwik';
import logCalculatorInteraction from './logCalculatorInteraction';

export default compose(
  applyMiddleware(googleAnalytics),
  applyMiddleware(piwik),
  applyMiddleware(logCalculatorInteraction)
);
