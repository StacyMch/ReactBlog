import { URL } from '../constants';

export const deletePost = (postId) =>
	fetch(`${URL}/posts/${postId}`, {
		method: 'DELETE',
	});
