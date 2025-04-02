import styled from 'styled-components';

const IconContainer = ({ className, id, onClick, disabled }) => (
	<div className={className}>
		<i
			className={`fa ${id}`}
			aria-hidden="true"
			onClick={onClick}
			disabled={disabled}
		></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	${({ disabled }) => (disabled ? 'color: #ccc' : 'color: #000')};

	&:hover {
		cursor: pointer;
	}
`;
