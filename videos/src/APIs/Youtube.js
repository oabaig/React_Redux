import axios from 'axios';

const KEY = 'AIzaSyAgRR6eYWwHi5X6iG9eCJqXz8wrL_vsn4I';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
