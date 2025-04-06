import { H2, Icon } from '../../../../components';
import styled from 'styled-components';

const PostContentContainer = ({
	post: { id, title, imageUrl, content, publishedAt },
	className,
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						margin="0 8px 0 0"
						size="18px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>

				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						margin="0 10px 0 0"
						size="21px"
						onClick={() => {}}
					/>
					<Icon
						id="fa-trash-o"
						margin="0 8px 0 0"
						size="21px"
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		margin: -20px 0 20px;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
		align-items: baseline;
	}

	& i {
		position: relative;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}
`;
