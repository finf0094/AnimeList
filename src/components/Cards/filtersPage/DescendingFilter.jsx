import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { descendingFilterThunk, toggleFetchingAc } from '../../../store/animeReducer';

import rating from '../../../icons/rating.png'
import s from '../cards.module.css'
import { useParams } from 'react-router-dom';

const DescendingFilter = () => {
    const dispatch = useDispatch()
    const {filterParam} = useParams();
    const animes = useSelector(state => state.anime.descendingFilter);
    const fetching = useSelector(state => state.anime.fetching)
    const [page, setPage] = useState(0);
    
    useEffect(() => {   
        if (fetching) {
            dispatch(descendingFilterThunk(page, filterParam));
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
        <div className={s.wrapper}>
            {animes.map(anime => (
                <div className={s.card} key={anime.id}>
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

export default DescendingFilter