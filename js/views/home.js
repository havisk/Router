function contact(data){

	return data.map(function(item){
		return `
		<li class="list-item" data-list-id="${item.objectId}">${item.Name}</li>
		`
	}).join('');
}

function HomeTemplate(data){
	return `
	<h2>My Peeps</h2>
	<li>${contact(data)}</li>
	<br>
	<button class="add-contact" data-to="#new">New Contact</button>
	`;
}

export default HomeTemplate;