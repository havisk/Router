import Backbone from 'backbone';
import $ from 'jquery';

import ContactCollection from './contact_collection';

import listTemplate from './views/list';
import listsTemplate from './views/lists';

let Router = Backbone.Router.extend({

	routes: {
		'lists' : "showLists",
		'lists/:id' : 'showSpecificList'
	},

	initialize: function(appElement){
		this.$el = appElement;

		this.lists = new ContactCollection();

		let router = this;

		this.$el.on('click', '.list-item', function(event){
			let $li = $(event.currentTarget);
			var listId = $li.data('list-id');
			router.navigate(`lists/${listId}`);
			router.showSpecificList(listId);
		});
	},

	showSpinner: function(){
		this.$el.html(
			'<i class="fa fa-spinner fa-spin"></i>'
		);
	},

	showSpecificList: function(listId){
		let list = this.lists.get(listId);

		if(list){
			this.$el.html( listTemplate(list.toJSON()) );
		} else {
			let router = this;
			list = this.list.add({objectId: listId});
			this.showSpinner();
			list.fetch().then(function(){
				router.$el.html( listTemplate(list.toJSON()) );
			});
		}
	},
	showLists: function(){
		this.showSpinner();

		var router = this;

		this.lists.fetch().then(function(){

			router.$el.html( listsTemplate(router.lists.toJSON()) );
		});
	},

		start: function(){
			Backbone.history.start();
		}

});

export default Router;