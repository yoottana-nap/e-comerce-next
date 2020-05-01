import axios from 'axios';

// const productionURL = 'https://corpjurist.com/api/v1/';
const devURL = 'http://localhost:5000/routes/api/';

export const service = axios.create({
	baseURL: devURL,
	headers: { 'content-type': 'application/json' }
});

