import React from 'react';
import {SearchBar} from './components/SearchBar'
import {SearchResults} from './components/SearchResults'
import {Playlist} from './components/Playlist'
import './styles.css'



class App extends React.Component {
  
  constructor(props){
    super(props)
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
      ]
      // ,
      // playlistName: 'JOEMAMA',
      // playlistTracks: 'thisalsoisjoemama'
    }
  }; 

  render() {
    return (
      <div>
      <h1>Spotify Interact</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
         <SearchResults searchResults = {this.state.searchResults} />
         <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    )
  }
   
}

export default App;
