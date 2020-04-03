import React, { Component } from 'react';

import spotify from '../../utils/api';
import * as auth from '../../utils/auth';

import { Link } from 'react-router-dom';

import { Back, AlbumContainer, Player } from './styles';

import Header from '../../components/Header';

import { FaChevronLeft } from 'react-icons/fa';

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      cover: '',
      album: '',
      artist: '',
      tracks: [],
      currentTrack: '',
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({data:match})

    auth.getAccessToken();

    spotify.get(`/albums/${match.params.album}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      }
    })
      .then((res) => {
        this.setState({data: res.data});
        this.setState({cover: res.data.images[0].url});
        this.setState({album: res.data.name});
        this.setState({artist: res.data.artists[0].name});
        this.setState({tracks: res.data.tracks.items});
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  handleTrackClick = (e) => {
    const trackPreview = e.target.attributes.preview.textContent;

    this.setState({currentTrack: trackPreview});

    const player = document.querySelector('audio');

    player.load();
    player.play();

  }

  render() {
    const { cover, album, artist, tracks, currentTrack } = this.state;
    console.log(tracks)
    return (
      <>
      <Header />
      <Back>
        <FaChevronLeft /><Link to={`/search#access_token=${sessionStorage.getItem('access_token')}`}>Voltar</Link>
      </Back>

      <AlbumContainer>
        <div id="album-cover">        
          <img src={cover} alt="Album Cover"/>
          <p id="album-name">{album}</p>
          <p id="artist-name">{artist}</p>
        </div>
        

        <div id="album-tracks">
          <ol>
            {tracks.map(track => (
              <li onClick={this.handleTrackClick} key={track.id} preview={track.preview_url}>{track.name} 
                <span>
                  {Math.floor(track.duration_ms/60000) + ':' + (((track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + ((track.duration_ms % 60000) / 1000).toFixed(0) } 
                </span>
              </li>
            ))}
          </ol>
        </div>
      </AlbumContainer>

      <Player controls>
        <source src={currentTrack} />
      </Player>
    </>
    )
  }
}