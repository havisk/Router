import $ from 'jquery';

const APP_ID = 'whzBDGqQBiuSW1vtdsp9UTNpZbGUUXtni3ohqxsi';
const API_KEY = 'FsBhUUKFQ23Oi2m8aPSX28nSeYOHjqmSv4hvROze';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
	}
});