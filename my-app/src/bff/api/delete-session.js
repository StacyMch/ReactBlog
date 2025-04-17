import { URL } from '../constants';

export const deleteSession = async (sessionId) =>
	fetch(`${URL}/sessions/${sessionId}`, {
		method: 'DELETE',
	});
