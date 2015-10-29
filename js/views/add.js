import	$ from 'jquery';
import ContactModel from '../contact_model';

function addTemplate(data){
	return `
		<h2>New Contact</h2>
		<form>
        <ul>
          <li><input type="text" placeholder="name" id="name"></li>
          <li><input type="text" placeholder="email" id="email"></li>
          <li><input type="text" placeholder="phone" id="phone"></li>
          <li><input type="text" placeholder="location" id="location"></li>
        </ul>
          <button class="return" data-to="" type="submit" id="submit">Submit</button>
      </form>
    `
};


export default addTemplate;