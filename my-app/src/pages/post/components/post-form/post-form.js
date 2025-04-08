import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks/use-server-request';
import { sanitizeContent } from './utils';
import styled from 'styled-components';

const PostFormContainer = ({
	post: { id, title, imageUrl, content, publishedAt },
	className,
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitleUrl = titleRef.current.value;
		const newContentUrl = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitleUrl,
				content: newContentUrl,
			}),
		).then(() => navigate(`/post/${id}`));

		console.log(newImageUrl);
		console.log(newTitleUrl);
		console.log(newContentUrl);
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<SpecialPanel
				publishedAt={publishedAt}
				margin="20px 0 20px"
				editButton={
					<Icon
						id="fa-floppy-o"
						margin="0 10px 0 0"
						size="21px"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
