import React from 'react'
import {Track} from './Track'
export class Tracklist extends React.Component {

render() {
return(
   
<div className="Tracklist">
  {
    this.props.tracks && this.props.tracks.map(track => {
      return <Track 
              isRemoval = {this.props.isRemoval} 
              onRemove = {this.props.onRemove} 
              onAdd = {this.props.onAdd} 
              track ={track} 
              key={track.id}/>
    })
  }
</div>

)
}
}

