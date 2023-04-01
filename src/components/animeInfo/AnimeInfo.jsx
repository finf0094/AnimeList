import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAnimeThunk, getGenresThunk } from '../../store/animeReducer';

import s from './animeInfo.module.css'

const AnimeInfo = () => {
  const dispatch = useDispatch()
  const { anime, genres } = useSelector(state => state.anime)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAnimeThunk(id))
    dispatch(getGenresThunk(id))
  }, [])


  return (
    <div className={s.wrapper}>
      {anime && (
        <div>
          <div className={s.row}>
            <img src={anime.attributes?.posterImage?.medium} alt="" />
            <div className={s.description}>
              <p><span>Title:</span> {anime.attributes?.canonicalTitle}</p>
              <p><span>Rating Rank:</span> {anime.attributes?.ratingRank}</p>
              <p><span>Episodes Count:</span> {anime.attributes?.episodeCount}</p>
              <p><span>Age:</span> {anime.attributes?.ageRatingGuide}</p>
              <p><span>Status:</span> {anime.attributes?.status}</p>
              <p><span>Genre:</span> {genres?.map(genre => <span className={s.genre}>{genre.attributes?.name}, </span>)}</p>
              <p><span>Description:</span> {anime.attributes?.synopsis}</p>
            </div>
          </div>
          <div className={s.youtube}>
            <iframe width="700" height="392" src={`https://www.youtube.com/embed/${anime.attributes?.youtubeVideoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnimeInfo