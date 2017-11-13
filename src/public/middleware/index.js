import { applyMiddleware, compose } from 'redux';
import googleAnalytics from './googleAnalytics';
import logCalculatorInteraction from './logCalculatorInteraction';

export default compose(
	applyMiddleware(googleAnalytics),
	applyMiddleware(logCalculatorInteraction),
)