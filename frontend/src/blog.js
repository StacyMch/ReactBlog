import React, { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Error, Header, Footer } from './components';
import { Modal } from './components';
import { ERROR } from './constants';
import { Authorization, Main, Post, Registration, Users } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/register" element={<Registration />}></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/post" element={<Post />}></Route>
					<Route path="/post/:id" element={<Post />}></Route>
					<Route path="/post/:id/edit" element={<Post />}></Route>
					<Route
						path="*"
						element={<Error error={ERROR.PAGE_DOES_NOT_EXIST} />}
					></Route>
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
