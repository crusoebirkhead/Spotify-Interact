import React from 'react'
import {Tracklist} from './Tracklist'

export class Playlist extends React.Component {

  constructor(props){
  super(props);
   this.handleChange = this.handleChange.bind(this);  
  }

  handleChange = (event) =>{
    this.props.onNameChange(event.target.value)
  }


render() {

return(
   
<div className="Playlist">
  <input 
    className = "name" 
    onChange = {this.handleChange} 
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
