import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import styled from 'styled-components';

const UserRowContainer = ({ className, login, registeredAt, roleId: userRoleId }) => {
	const onRoleChange = () => {};
	const roles = [];
	const dispatch = useDispatch();

	return (
		<div className={className} key={userRoleId}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>

				<di className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId}>{roleName}</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="10px 0px 0px 0px"
						onClick={() => dispatch(/* TODO */)}
					/>
				</di>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="10px 0px 0px 0px"
				onClick={() => dispatch(/* TODO */)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
