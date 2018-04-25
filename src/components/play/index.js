'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import './play.scss'

const Play = ({ item }) => (
  <div className='play'>
    {item.map((data, index) =>
      <div className='play-item' key={index}>
        <div className='play-youtube'>
          <iframe width='560' height='315' src={`https://www.youtube.com/embed/${data.id}`} />
        </div>
        <div className='play-info'>
          <h2 className='play-title'>{data.snippet.title}</h2>
          <p className='play-views'>visualizações: {data.statistics.viewCount}</p>
        </div>
        <div className='play-description'>
          <p>{data.snippet.description}</p>
        </div>
        <div className='play-back'>
          <Link to='/'>Voltar para o resultados</Link>
        </div>
      </div>
    )}
  </div>
)

export default Play
