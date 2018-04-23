'use strict'
import React, { Component } from 'react'
import Search from 'views/search'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      procurar: '',
      statusSearch: '',
      searchError: ''
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.Procurar.value
      if (value !== '') {
        this.setState({
          procurar: value,
          statusSearch: 'active',
          searchError: ''
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
