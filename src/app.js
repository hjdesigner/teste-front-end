'use strict'
import React, { Component } from 'react'
import Search from 'views/search'
import Movies from 'views/movies'
import Pagination from 'views/pagination'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      procurar: '',
      statusSearch: '',
      searchError: '',
      statusPagination: 'false',
      nextPage: '',
      movies: []
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.Procurar.value
      if (value !== '') {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${value}&maxResults=20&key=AIzaSyCmLZ7XG1MHXCu1VkzDw2w3WwCcaw9lex8`)
          .then(response => response.json())
          .then((data) => {
            if (data.items.length > 0) {
              this.setState({
                procurar: value,
                statusSearch: 'active',
                searchError: '',
                movies: data.items
              })
            } else {
              this.setState({
                searchError: 'Não foi encontrado nenhum video'
              })
            }

            if (data.nextPageToken) {
              this.setState({
                nextPage: data.nextPageToken,
                statusPagination: 'true'
              })
            } else {
              this.setState({
                statusPagination: 'false'
              })
            }
          })
      } else {
        this.setState({
          searchError: 'O campo Procurar não pode ficar vazio'
        })
      }
    }
    this.handlePagination = (e) => {
      fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${this.state.procurar}&pageToken=${this.state.nextPage}&maxResults=20&key=AIzaSyCmLZ7XG1MHXCu1VkzDw2w3WwCcaw9lex8`)
        .then(response => response.json())
        .then((data) => {
          const item = this.state.movies
          data.items.map(value => {
            item.push(value)
          })
          this.setState({
            movies: item
          })
          if (data.nextPageToken) {
            this.setState({
              nextPage: data.nextPageToken,
              statusPagination: 'true'
            })
          } else {
            this.setState({
              statusPagination: 'false'
            })
          }
        })
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
          <Pagination label='mostrar mais videos' status={this.state.statusPagination} handlePagination={this.handlePagination} />
        </div>
      </div>
    )
  }
}

export default App
