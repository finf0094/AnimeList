import React, { useEffect, useState } from 'react'

import s from './cards.module.css'

import rating from '../../icons/rating.png'
import { animeOrMangaAC, getAnimesThunk, toggleFetchingAc } from '../../store/animeReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../icons/spinner'

const Cards = () => {
  const { animeOrManga } = useParams()
  const dispatch = useDispatch()
  const animes = useSelector(state => state.anime.animes);
  const fetching = useSelector(state => state.anime.fetching)
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (fetching) {
      console.log(page)
      dispatch(getAnimesThunk(page, animeOrManga));
      dispatch(animeOrMangaAC(animeOrManga))
      setPage(page + 20)
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      dispatch(toggleFetchingAc(true))
    }
  }


  return (
    <>
      <div className={s.wrapper}>
    {/* {fetching ? <div className={s.card} style={{ maxWidth: '100rem',positon: 'relative', left: '50%', right: '50%'}}><Spinner/> </div>: ''} */}
        {animes.map(anime => (
          <Link to={`/${animeOrManga}/${anime.id}`} className={s.card} key={anime.id}>
            <img src={anime.attributes.posterImage.small} alt="anime image" />
            <div className={s.row}>
              <h4 className={s.animeTitle}>{anime.attributes.canonicalTitle}</h4>
              <div style={{ display: 'flex', gap: 5 }}>
                <p>{anime.attributes.averageRating}</p>
                <img src={rating} alt="rating" />
              </div>
            </div>
          </Link>))}
      </div>
    </>
  )
}


export default React.memo(Cards)