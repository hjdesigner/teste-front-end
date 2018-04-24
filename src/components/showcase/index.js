'use strict'
import React from 'react'

const Showcase = ({ items }) => (
  <ul>
    {items.map((data, index) =>
      <li key={index} videoId={data.id.videoId}>
        <figure>
          <img src={data.snippet.thumbnails.medium.url} />
        </figure>
        <h2>{data.snippet.title}</h2>
        <p>{data.snippet.description}</p>
      </li>
    )}
  </ul>
)

export default Showcase
