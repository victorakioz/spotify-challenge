import React from 'react';
import * as auth from '../../utils/auth';

import { FaSpotify } from 'react-icons/fa';
import { LoginContainer, LoginBtn } from './styles';

export default function Login() {
	return (
		<>
			<LoginContainer>
				<FaSpotify />
				<LoginBtn href={auth.loginUrl()}
>
					Login com Spotify
				</LoginBtn>
			</LoginContainer>
		</>
	);
}