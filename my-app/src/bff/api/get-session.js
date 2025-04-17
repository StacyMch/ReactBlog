import { transformSession } from '../transformers';
import { URL } from '../constants';

export const getSession = async (hash) =>
	fetch(`${URL}/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
