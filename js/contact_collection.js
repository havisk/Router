import Backbone from 'backbone';
import ContactModel from './contact_model';

let ContactCollection = Backbone.Collection.extend({
	url: 'https://api.parse.com/1/classes/Lists',

	model: ContactModel,

	parse: function(data) {
		return data.results;

	}


});

export default ContactCollection;