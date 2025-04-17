import { transformPost } from '../transformers';
import { URL } from '../constants';

export const getPosts = (searchPhrase, page, limit) => {
	return fetch(`${URL}/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`)
		.then((loadedPosts) =>
			Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]),
		)
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts && loadedPosts.map(transformPost),
			links,
		}));
};
