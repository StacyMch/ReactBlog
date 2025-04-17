import { transformUser } from '../transformers';
import { URL } from '../constants';

export const getUser = async (loginToFind) =>
	fetch(`${URL}/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
