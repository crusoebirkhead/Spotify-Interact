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
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
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

  // updates the state of track array by pushing search results
  addTrack = (track) => {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)){
      return
    } 
      tracks.push(track)
      this.setState({playlistTracks: tracks})
  }

  //updates the state of track arrary after filtering out track by ID
  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks})
  }

  //creates array of URIs for Spotify to consume when pushed onSave
  savePlaylist = () => {
    let trackURIs = this.state.playlistTracks.map(track => track.uri)
  }

  search = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div>
      <h1>Spotify Interact</h1>
      <div className="App">

        <SearchBar 
        onSearch = {this.search} 
        />

        <div className="App-playlist">

         <SearchResults 
          onAdd = {this.addTrack} 
          searchResults = {this.state.searchResults} />

         <Playlist 
          onSave = {this.savePlaylist} 
          onRemove = {this.removeTrack} 
          playlistName = {this.state.playlistName} 
          playlistTracks = {this.state.playlistTracks}/>
          
        </div>
      </div>
    </div>
    )
  }  
}

export default App;
