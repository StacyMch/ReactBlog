import { URL } from '../constants';

export const getRoles = () =>
	fetch(`${URL}/roles`).then((loadedRoles) => loadedRoles.json());
