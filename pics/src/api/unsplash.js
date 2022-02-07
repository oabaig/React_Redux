import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID Wwk_j-xQOtlhMLnxU-PDQwkVashMtkjnzYibUjXeYO8',
	},
});
