'use strict'
import React from 'react'
import InputForm from 'components/input'
import ButtonForm from 'components/button'
import './search.scss'

const Search = ({ labelInput, handleSearch, labelBusca, statusSearch, searchError }) => (
  <form className={`search ${statusSearch}`} onSubmit={handleSearch}>
    <InputForm label={labelInput} />
    <ButtonForm label={labelBusca} />
    <div className='search__error'>{searchError}</div>
  </form>
)

export default Search
