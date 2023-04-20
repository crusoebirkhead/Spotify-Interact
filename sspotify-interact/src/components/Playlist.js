import React from 'react'
import {Tracklist} from './Tracklist'

export class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.state = {
      inputValue : ''
    }
  }

  //updates the state of playlist name on each key stroke
  updatePlaylistName = (event) => {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue)
  }


render() {

return(
   
<div className="Playlist">
  <input 
    className = "name" 
    onChange = {this.updatePlaylistName} 
    placeholder={"New Playlist"}
    />

  <Tracklist  
    isRemoval = {true} 
    onRemove = {this.props.onRemove} 
    tracks = {this.props.playlistTracks} />

  <button onClick = {this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
)
}
}
