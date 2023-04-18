import React from 'react'
import {Tracklist} from './Tracklist'

export class Playlist extends React.Component {

render() {

return(
   
<div className="Playlist">
  <input defaultValue={"New Playlist"}/>
  <Tracklist playlistTracks = {this.props.playlistTracks} />
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
)
}
}
