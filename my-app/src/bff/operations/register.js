import { addUser, getUser } from '../api';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword) => {
	const existingUser = await getUser(regLogin);

	if (existingUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);
	const { id, login, roleId } = user;

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
