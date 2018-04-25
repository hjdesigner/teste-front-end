'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'views/home'
import PagePlay from 'views/page-play'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      procurar: '',
      statusSearch: '',
      searchError: '',
      statusPagination: 'false',
      nextPage: '',
      movies: [],
      playItem: []
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.Procurar.value
      if (value !== '') {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${value}&maxResults=20&order=relevance&type=video,playlist&key=AIzaSyCmLZ7XG1MHXCu1VkzDw2w3WwCcaw9lex8`)
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
    this.handleClickLink = (e) => {
      let videoId = e.target.closest('a').getAttribute('data-id')
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=AIzaSyCmLZ7XG1MHXCu1VkzDw2w3WwCcaw9lex8`)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            playItem: data.items
          })
        })
    }
  }
  render () {
    return (
      <Router>
        <div className='row'>
          <div className='col s12'>
            <Route exact path='/' render={(...props) => (<Home
              labelInput='Procurar'
              handleSearch={this.handleSearch}
              statusSearch={this.state.statusSearch}
              searchError={this.state.searchError}
              labelBusca='Buscar'
              items={this.state.movies}
              handleClickLink={this.handleClickLink}
              labelPagination='mostrar mais videos'
              statusPagination={this.state.statusPagination}
              handlePagination={this.handlePagination} />)} />
            <Route exact path='/video' render={(props) => (<PagePlay playItem={this.state.playItem} />)} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
