'use strict'
import React from 'react'
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

export default Showcase
