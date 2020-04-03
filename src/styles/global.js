import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 58%;

    @media (min-width: 650px) {
      font-size: 62.5%;
    }
  }

  body {
    box-sizing: border-box;
		min-height: 100%;
		background-color: #181818;
	}

	body,
	input {
		font-family: Roboto, Arial, Arial, sans-serif;
  }
  
  #app {
    padding: 4rem 2rem;
  }

  @media (min-width: 650px) {
    #app {
      padding: 4rem;
    }
  }

  @media (min-width: 900px) {
    #app {
      padding: 4rem 12rem;
    }
  }
`;
