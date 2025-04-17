import { generateDate } from '../utils';
import { URL } from '../constants';

export const addPost = ({ imageUrl, title, content }) =>
	fetch(`${URL}/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
			published_at: generateDate(),
		}),
	}).then((createdPost) => createdPost.json());
