
function SpecificListTemplate(data){

	return `
		<li>${data.Name}</li><br>
		<li>${data.Email} </li><br>
		<li>${data.Phone} </li><br>
		<li>${data.Location} </li>
		<a href='' class="back"><i class="fa fa-long-arrow-left"></i></a>
		`
}

export default SpecificListTemplate;