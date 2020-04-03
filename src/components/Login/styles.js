import styled from 'styled-components';

export const LoginContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 87vh;

	svg {
		font-size: 15rem;
		color: #1db954;
		margin-bottom: 4rem;
	}
`;

export const LoginBtn = styled.a`
	background-color: #1db954;
	color: #ffffff;
	padding: 2rem;
	border-radius: 5rem;
	font-size: 1.8rem;
	text-decoration: none;
	transition: all 0.5s;

	:hover {
		background-color: #23a050;
	}

	:active {
		background-color: #1db948;
	}
`;
