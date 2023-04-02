import React, { useState } from 'react'

import s from './search.module.css'

import search from '../../icons/search.png'
import { clearFilterAC, searchAnimeThunk } from '../../store/animeReducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Search = () => {
  const animeOrManga = useSelector(state => state.anime.animeOrManga);
  const filterParam = useSelector(state => state.anime.getFilter)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchTerm)
    try {
      dispatch(searchAnimeThunk(searchTerm));
    } catch (error) {
      console.error(error);
    }
  };

  const clearFilter = (e) => {
    e.preventDefault()
    clearFilterAC()
  }

  return (
    <div className={s.wrapper} >
      <div className={s.input}>
        <input type="search" placeholder='Search Anime, Manga and more...' onChange={(e) => setSearchTerm(e.target.value)} />
        <div className={s.searchPanel}>
          <div className={s.dropdown}>
            <button className={s.dropbtn} onClick={clearFilter}>{filterParam ? filterParam : "All"}</button>
            <div className={s.dropdownContent}>
              <NavLink to={`/${animeOrManga}/filter/-averageRating`}>descending rating</NavLink>
              <NavLink to={`/${animeOrManga}/filter/averageRating`}>ascending rating</NavLink>
              <NavLink to={`/${animeOrManga}/filter/popularityRank`}>Popularity</NavLink>
            </div>
          </div>
          <button className={s.searchBtn} onClick={handleSearch}>
            <img src={search} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search