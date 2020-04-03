import styled from 'styled-components';

export const Back = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: -1rem;

  svg {
    color: #FAFAFA;
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  a {
    font-size: 1.6rem;
    color: #FAFAFA;
    text-decoration: none;
    margin-right: auto;
  }
`;

export const AlbumContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: unset;
  }

  #album-cover {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media (min-width: 650px) {
      width: 25%;
      margin-bottom: unset;
    }

    img {
      width: 50%;
      height: auto;
      object-fit: cover;
      margin: 1rem auto;
      transition: all 0.5s;

      @media (min-width: 650px) {
        width:100%;
      }

      :hover {
        color: #000000;
        opacity: 50%;
      }
    }

    #album-name {
      font-size: 1.8rem;
      color: #FAFAFA;
      margin-bottom: 1rem;
    }

    #artist-name {
      font-size: 1.4rem;
      color: #999999;
    }
  }

  #album-tracks {
    width: 100%;
    font-size: 1.6rem;
    color:#FAFAFA;

    @media (min-width: 650px) {
      width: 70%;
    }

    ol {
      list-style: none; 
      counter-reset: li;
    }

    li::before {
      content: counter(li)'.'; 
      color: #FAFAFA;
      display: inline-block; 
      width: 3rem;
      color: #999999;
    }

    li {
      counter-increment: li;
      line-height: 2rem;
      display: flex;
      transition: all 0.3s;
      padding: 1rem;
      cursor: pointer;

      :hover {
      background-color: #000000;
      opacity: 50%;
      }
    }

    span {
      color: #999999;
      margin-left: auto;
    }
  }
`;

export const Player = styled.audio`
  width: 100%;
  margin-top: 5rem;
`;