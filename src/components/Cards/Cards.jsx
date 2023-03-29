import React, { useEffect } from 'react'

import s from './cards.module.css'

import rating from '../../icons/rating.png'
import { getAnimesThunk } from '../../store/animeReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cards = () => {
  const dispatch = useDispatch()
  const animes = useSelector(state => state.anime.animes);
  console.log(animes[0]);
  useEffect(() => {
    dispatch(getAnimesThunk());
  }, [])

  return (
    <div className={s.wrapper}>
      {animes.map(anime => (
        <div className={s.card}>
          <img src={anime.attributes.posterImage.small} alt="anime image" />
          <div className={s.row}>
            <h4 className={s.animeTitle}>{anime.attributes.slug}</h4>
            <div style={{ display: 'flex', gap: 5 }}>
              <p>{anime.attributes.averageRating}</p>
              <img src={rating} alt="rating" />
            </div>
          </div>
        </div>))}
    </div>
  )
}

export default Cards