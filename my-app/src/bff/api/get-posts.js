import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3005/posts')
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPOsts) => loadedPOsts && loadedPOsts.map(transformPost));
