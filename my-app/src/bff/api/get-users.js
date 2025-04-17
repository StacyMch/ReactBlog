import { transformUser } from '../transformers';
import { URL } from '../constants';

export const getUsers = () =>
	fetch(`${URL}/users`)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser));
