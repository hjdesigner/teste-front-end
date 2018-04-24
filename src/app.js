'use strict'
import React, { Component } from 'react'
import Search from 'views/search'
import Movies from 'views/movies'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      procurar: '',
      statusSearch: '',
      searchError: '',
      movies: []
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.Procurar.value
      if (value !== '') {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${value}&maxResults=20&key=AIzaSyCmLZ7XG1MHXCu1VkzDw2w3WwCcaw9lex8`)
          .then(response => response.json())
          .then((data) => {
            this.setState({
              procurar: value,
              statusSearch: 'active',
              searchError: '',
              movies: data.items
            })
            console.log(this.state.movies)
          })
      } else {
        this.setState({
          searchError: 'O campo Procurar não pode ficar vazio'
        })
      }
    }
  }
  render () {
    return (
      <div className='row'>
        <div className='col s12'>
          <Search
            labelInput='Procurar'
            handleSearch={this.handleSearch}
            statusSearch={this.state.statusSearch}
            searchError={this.state.searchError}
            labelBusca='Buscar' />
          <Movies items={this.state.movies} />
        </div>
      </div>
    )
  }
}

export default App
