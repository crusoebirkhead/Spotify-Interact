import React from 'react';
import {SearchBar} from './components/SearchBar'
import {SearchResults} from './components/SearchResults'
import {Playlist} from './components/Playlist'
import {Spotify} from './util/Spotify'
import './styles.css'



class App extends React.Component {
  
  constructor(props){
    super(props)

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.state ={ 
      searchResults : [],
      playlistName: '',
      playlistTracks: []
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

  //updates playlistName state with user input
  updatePlaylistName = (name) => {
    this.setState({playlistName: name });
  }


  
  savePlaylist = () => {
    let trackURIs = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

 
  search = (term) => {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      })
    })
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
          onNameChange = {this.updatePlaylistName}
          playlistName = {this.state.playlistName} 
          playlistTracks = {this.state.playlistTracks}/>
          
        </div>
      </div>
    </div>
    )
  }  
}

export default App;
