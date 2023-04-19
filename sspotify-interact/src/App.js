import React from 'react';
import {SearchBar} from './components/SearchBar'
import {SearchResults} from './components/SearchResults'
import {Playlist} from './components/Playlist'
import './styles.css'



class App extends React.Component {
  
  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.state ={ 
      searchResults : [
      {title: 'joe',
      artist: 'mama',
      album: 'joe',
      id: 'mama'},
      {title: 'joe2',
      artist: 'mama2',
      album: 'joe2',
      id: 'mama2'}
      ],
      playlistName: 'JOEMAMA',
      playlistTracks: [
        {name: 'playlist1',
        artist: 'playlistArtist1',
        album: 'playlistAlbum1',
        id: 1},
        {name: 'playlist2',
        artist: 'playlistArtist2',
        album: 'playlistAlbum2',
        id: 2}
        ]
    }
  }; 

  addTrack = (track) => {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)){
      return
    } 
      tracks.push(track)
      this.setState({playlistTracks: tracks})
  }

  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks})
  }

  render() {
    return (
      <div>
      <h1>Spotify Interact</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
         <SearchResults onAdd = {this.addTrack} searchResults = {this.state.searchResults} />
         <Playlist onRemove = {this.removeTrack} playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    )
  }  
}

export default App;
