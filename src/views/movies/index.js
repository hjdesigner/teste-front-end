'use strict'
import React from 'react'
import Showcase from 'components/showcase'
import './movies.scss'

const Movies = ({items}) => (
  <div className='movies'>
    <Showcase items={items} />
  </div>
)
export default Movies
