import Backbone from 'backbone';
import $ from 'jquery';

import ContactCollection from './contact_collection';

import HomeTemplate from './views/home';
import SpecificListTemplate from './views/list';

let Router = Backbone.Router.extend({

	routes: {
		""      : "home",
		// 'lists' : "showLists",
		'lists/:id' : 'showSpecificList'
	},

	initialize: function(appElement){
		this.$el = appElement;

		this.lists = new ContactCollection();

		let router = this;

		this.$el.on('click', '.list-item', function(event){
			let $li = $(event.currentTarget);
			let listId = $li.data('list-id');
			router.navigate(`list/${listId}`);
			router.showSpecificList(listId);
		});
	},

	showSpinner: function(){
		this.$el.html(
			'<i class="fa fa-spinner fa-spin"></i>'
		);
	},

	home: function(){
		this.showSpinner();
		let router = this;
		this.lists.fetch().then(function(){

			router.$el.html( HomeTemplate(router.lists.toJSON()) );
		});

	},

	showSpecificList: function(listId){
		let specificList = this.lists.get(listId);

		if(specificList){
			this.$el.html( SpecificListTemplate(specificList.toJSON()) );
		} else {
			let router = this;
			specificList = this.lists.add({objectId: listId});
			this.showSpinner();
			specificList.fetch().then(function(){
				router.$el.html( SpecificListTemplate(specificList.toJSON()) );
			});
		}
	},
	
		start: function(){
			Backbone.history.start();
		}

});

export default Router;