import { URL } from '../constants';

export const deleteUser = (userId) =>
	fetch(`${URL}/users/${userId}`, {
		method: 'DELETE',
	});
