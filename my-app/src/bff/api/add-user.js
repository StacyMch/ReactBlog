import { generateDate } from '../utils';
import { URL } from '../constants';

export const addUser = (login, password) =>
	fetch(`${URL}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: generateDate(),
			role_id: 2,
		}),
	}).then((createdUser) => createdUser.json());
