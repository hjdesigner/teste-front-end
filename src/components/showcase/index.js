'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './showcase.scss'

const Showcase = ({ items, handleClickLink }) => (
  <ul className='showcase'>
    {items.map((data, index) =>
      <li key={index}>
        <Link to='/video' onClick={handleClickLink} data-id={data.id.videoId}>
          <figure className='image'>
            <img src={data.snippet.thumbnails.medium.url} />
          </figure>
          <h2 className='title'>{data.snippet.title}</h2>
          <p className='text'>{data.snippet.description}</p>
        </Link>
      </li>
    )}
  </ul>
)

Showcase.propTypes = {
  items: PropTypes.array.isRequired
}

export default Showcase
