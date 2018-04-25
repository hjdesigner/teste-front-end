'use strict'
import React from 'react'
import ButtonForm from 'components/button'
import './pagination.scss'

const Pagination = ({ statusPagination, labelPagination, handlePagination }) => (
  <div className={`pagination ${statusPagination}`}>
    <ButtonForm label={labelPagination} handlePagination={handlePagination} />
  </div>
)

export default Pagination
