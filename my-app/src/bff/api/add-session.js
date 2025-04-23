import { URL } from '../constants';

export const addSession = (hash, user) => {
	fetch(`${URL}/sessions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			hash,
			user: {
				id: user.id,
				login: user.login,
				password: user.password,
				registered_at: user.registered_at,
				role_id: user.role_id,
			},
		}),
	});
};
