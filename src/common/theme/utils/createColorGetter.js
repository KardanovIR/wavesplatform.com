import { path } from 'ramda';


export default palette => color => {
	// old API
	if (~color.indexOf('-')) {
		console.log(path(color.split('-'), palette));
		return path(color.split('-'), palette);
	}

	// new API
	if (~color.indexOf('[')) {
		path(color.split('-'), palette);
	}
}
	// palette[color.split('-')[0]][color.split('-')[1]],