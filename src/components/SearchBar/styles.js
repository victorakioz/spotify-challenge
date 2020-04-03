import styled from 'styled-components';

export const SearchBarContainer = styled.section`
	display: flex;
	flex-direction: column;
  width: 100%;
  margin-top: -1rem;
`;

export const SearchLabel = styled.label`
	font-size: 1.6rem;
	color: #fafafa;
	display: flex;
	flex-direction: column;
	margin-bottom: 5rem;

	input {
		border: none;
		background-color: unset;
		font-weight: bold;
		font-size: 4.8rem;
		border-bottom: 0.1rem solid #999999;
		color: #999999;
		margin-top: 1rem;
	}
`;

export const ResultsContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5rem;

  .album {
    a {
      text-decoration: none;
    }

    img {
      width: 100%;
      transition: all 0.5s;

      :hover {
        background-color: #000000;
        opacity: 50%;
      }
    }

    p {
      text-align: center;
      font-size: 1.6rem;
    }

    .album-name {
      color: #FAFAFA;
    }
    
    .album-artist {
      color: #999999;
    }
  }
`;

export const AboveAlbum = styled.div`  
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    color: #FAFAFA;
  }
`;

export const Albums = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;

  @media (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }

  .album {
    a {
      text-decoration: none;
    }

    img {
      width: 100%;
      transition: all 0.5s;
      margin-bottom: 1rem;

      :hover {
        background-color: #000000;
        opacity: 50%;
      }
    }

    p {
      text-align: center;
      font-size: 1.6rem;
    }

    .album-name {
      color: #FAFAFA;
    }
    
    .album-artist {
      color: #999999;
    }
  }
`;