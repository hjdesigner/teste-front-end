'use strict'
import React from 'react'
import Showcase from 'components/showcase'
import './movies.scss'

const Movies = ({ items, handleClickLink }) => (
  <div className='movies'>
    <Showcase items={items} handleClickLink={handleClickLink} />
  </div>
)
export default Movies
