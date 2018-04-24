'use strict'
import React from 'react'
import { Button } from 'react-materialize'
import './button.scss'

const ButtonForm = ({ label, handlePagination }) => (
  <Button onClick={handlePagination}>{label}</Button>
)

export default ButtonForm
