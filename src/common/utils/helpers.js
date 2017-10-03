import {
	compose,
	not,
	isEmpty,
	filter
} from 'ramda';


export const isNotEmpty = compose(not, isEmpty);

export const filterNotEmpty = filter(isNotEmpty);