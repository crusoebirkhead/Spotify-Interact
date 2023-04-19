import React from 'react'

export class Track extends React.Component {

  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button onClick = {this.removeTrack} className = "Track-action">-</button>
    } else {
      return <button onClick = {this.addTrack} className = "Track-action">+</button>
    }
  }

  addTrack = () => {
    this.props.onAdd && this.props.onAdd(this.props.track)
  }

  removeTrack = () =>{
    this.propsonRemove && this.props.onRemove(this.props.track);
    console.log(this.props)
  }

render() {
return(
   
<div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  {this.renderAction()}
</div>

)
}
}
