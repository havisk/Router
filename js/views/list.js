import moment from 'moment';

function listTemplate(data){

	return `
		<li>${data.Name}</li><br>
		<li>${data.Email}</li><br>
		<li>${data.Phone}</li><br>
		<li>${data.Location}</li>

		`;
}

export default listTemplate;