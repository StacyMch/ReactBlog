import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration, Users } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

const Content = styled.div`
	padding: 120px 0;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/register" element={<Registration />}></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/post" element={<div>Новая статья</div>}></Route>
					<Route path="/post/:postId" element={<div>Статья</div>}></Route>
					<Route path="*" element={<div>Ошибка</div>}></Route>
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
