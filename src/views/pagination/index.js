'use strict'
import React from 'react'
import ButtonForm from 'components/button'
import './pagination.scss'

const Pagination = ({ status, label, handlePagination }) => (
  <div className={`pagination ${status}`}>
    <ButtonForm label={label} handlePagination={handlePagination} />
  </div>
)

export default Pagination
