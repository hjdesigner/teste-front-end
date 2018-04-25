'use strict'
import React from 'react'
import Search from 'views/search'
import Movies from 'views/movies'
import Pagination from 'views/pagination'

const Home = ({
  labelInput,
  handleSearch,
  statusSearch,
  searchError,
  labelBusca,
  items,
  handleClickLink,
  labelPagination,
  statusPagination,
  handlePagination }) => (
    <div>
      <Search
        labelInput={labelInput}
        handleSearch={handleSearch}
        statusSearch={statusSearch}
        searchError={searchError}
        labelBusca={labelBusca} />
      <Movies items={items} handleClickLink={handleClickLink} />
      <Pagination labelPagination={labelPagination} statusPagination={statusPagination} handlePagination={handlePagination} />
    </div>
)

export default Home
