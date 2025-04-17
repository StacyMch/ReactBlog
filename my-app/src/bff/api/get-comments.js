import { transformComment } from '../transformers';
import { URL } from '../constants';

const ALL_COMMENTS_URL = `${URL}/comments`;
const POST_COMMENTS_URL = `${URL}/comments?post_id=`;

export const getComments = (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;
	return fetch(url).then((loadedComments) =>
		loadedComments
			.json()
			.then(
				(loadedComments) =>
					loadedComments &&
					loadedComments.map((loadedComment) =>
						transformComment(loadedComment),
					),
			),
	);
};
