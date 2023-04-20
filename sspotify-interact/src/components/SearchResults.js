import React from 'react'
import { Tracklist } from './Tracklist'

export class SearchResults extends React.Component {

render() {

  
return(
   
<div className="SearchResults">
  <h2>Results</h2>
  <Tracklist 
    isRemoval = {false} 
    onRemove = {this.props.onRemove} 
    onAdd = {this.props.onAdd} 
    tracks = {this.props.searchResults} />
</div>

)
}
}
