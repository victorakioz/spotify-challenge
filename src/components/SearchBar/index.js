import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import spotify from '../../utils/api';
import * as auth from '../../utils/auth';

import { debounce } from 'lodash';

import { SearchBarContainer, SearchLabel, AboveAlbum, Albums } from './styles';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuery:'',
      lastSearch:[],
      albums:[],
    }
  }

  componentDidMount() {
    auth.getAccessToken();

    spotify.get(`https://api.spotify.com/v1/search?q=${sessionStorage.getItem('search')}&type=album&limit=10`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
    }})
    .then((res) => {
        this.setState({albums:res.data.albums.items});
      })
      .catch(err => {
        if (err) {
          const responseError = err.response.request.response;

          if (responseError.includes("The access token expired")) {
            alert('Token expirado, Redirecionando para a página de login.');
              
            window.location.href = auth.loginUrl();
          }
        }
      });
  }


  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    }
  }

  handleInputChange = (e) => {
    //console.log(e.target.value);
    const { dispatch } = this.props;

    this.setState({currentQuery: e.target.value});
    spotify.get(`https://api.spotify.com/v1/search?q=${this.state.currentQuery}&type=album&limit=10`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      }
    })
    .then((res) => {
        this.setState({albums:res.data.albums.items});
      })
      .catch(err => {
        if (err) {
          const responseError = err.response.request.response;

          if (responseError.includes("The access token expired")) {
            alert('Token expirado, Redirecionando para a página de login.');
              
            window.location.href = auth.loginUrl();
          }
        }
      });

      dispatch({
        type: 'SEARCH',
        e,
      });
  };

  render() {
    const { currentQuery, albums, artists } = this.state;
    console.log(artists);
    return (
      <>
        <SearchBarContainer>
          <SearchLabel>
            Busque por artistas, álbuns ou músicas
            <input 
              placeholder="Comece a escrever..." 
              onChange={this.debounceEvent(this.handleInputChange, 500)}
            />
            
          </SearchLabel>
        </SearchBarContainer>

        {currentQuery !== '' ? <AboveAlbum>          
          <h2>Resultados de busca para: {currentQuery}</h2>
        </AboveAlbum> : ''}
        
        
        <Albums>
            {albums.map(album => (
              <div className="album" key={album.id}>
                <Link to={`/album/${album.id}#access_token=${sessionStorage.getItem('access_token')}`}>
                  <img src={album.images[0].url} alt="Album Cover"/>
                  <p className="album-name">{album.name}</p>
                  <p className="album-artist">{album.artists[0].name}</p>
                </Link>
              </div>
            ))}
        </Albums>
      </>
    );
  }
}

export default connect()(SearchBar);
