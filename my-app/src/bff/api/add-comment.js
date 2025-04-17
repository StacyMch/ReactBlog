import { generateDate } from '../utils';
import { URL } from '../constants';

export const addComment = (userId, postId, content) =>
	fetch(`${URL}/comments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			published_at: generateDate(),
			content,
		}),
	});
