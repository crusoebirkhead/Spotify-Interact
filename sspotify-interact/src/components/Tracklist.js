import React from 'react'
import {Track} from './Track'
export class Tracklist extends React.Component {

  

render() {
  console.log(this.props.tracks)
return(
   
<div className="TrackList">
  {
    this.props.tracks.map(track => {
      return <Track track ={track} key={track.id}/>
    })
  }
</div>

)
}
}
