import axios from 'axios';

class ToyService {
	sendData(data) {
		axios.post('http://localhost:4200/toys/add/post', {toy:data 
		})
		.then(fuction(response) {
			console.log(response);
		})
		.catch(fuction (error) {
			console.log(error);
		})
	}
}
export default ToyService;