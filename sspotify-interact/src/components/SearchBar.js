import React from 'react'

export class SearchBar extends React.Component {

   constructor(props){
      super(props);
      this.search = this.search.bind(this)
      this.handleTermChange = this.handleTermChange.bind(this)
      this.state = {
         term: ''
      }
   }

   search = () => {
      this.props.onSearch(this.state)
   }

   handleTermChange = (event) => {
      this.setState({
         term: event.target.value
      })
   }

render() {

return(
   
<div className="SearchBar">
   <input onChange = {this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
   <button className="SearchButton">SEARCH</button>
</div>

)
}
}
