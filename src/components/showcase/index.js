'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import './showcase.scss'

const Showcase = ({ items }) => (
  <ul className='showcase'>
    {items.map((data, index) =>
      <li key={index} data-id={data.id.videoId}>
        <figure className='image'>
          <img src={data.snippet.thumbnails.medium.url} />
        </figure>
        <h2 className='title'>{data.snippet.title}</h2>
        <p className='text'>{data.snippet.description}</p>
      </li>
    )}
  </ul>
)

Showcase.propTypes = {
  items: PropTypes.array.isRequired
}

export default Showcase
