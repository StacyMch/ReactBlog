import { URL } from '../constants';

export const deleteComment = (id) =>
	fetch(`${URL}/comments/${id}`, {
		method: 'DELETE',
	});
