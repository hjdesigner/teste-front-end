'use strict'
import React, { Component } from 'react'
import Search from 'views/search'

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
      <div className='container'>
        <div className='row'>
          <Search
            labelInput='Procurar'
            handleSearch={this.handleSearch}
            statusSearch={this.state.statusSearch}
            searchError={this.state.searchError}
            labelBusca='Buscar' />
        </div>
      </div>
    )
  }
}

export default App
