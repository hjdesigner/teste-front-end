'use strict'
import React from 'react'
import { Input } from 'react-materialize'
import './input.scss'

const InputForm = ({ label, value }) => (
  <Input label={label} name={label} value={value} />
)

export default InputForm
