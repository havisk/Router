function process(data){

	return data.map(function(item){
		return `
		<li class="list-item" list-id="${item.objectId}">${item.Name}</li>
		`
	}).join('');
}

function listsTemplate(data){
	return `
	<h2>My Peeps</h2>
	<ul>${process(data)}</ul>
	`;
}

export default listsTemplate;