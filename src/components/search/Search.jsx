import React, { useState } from 'react'

import s from './search.module.css'

import search from '../../icons/search.png'
import { searchAnimeThunk } from '../../store/animeReducer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = () => {
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

  return (
    <div className={s.wrapper} >
      <div className={s.input}>
        <input type="search" placeholder='Search Anime, Manga and more...' onChange={(e) => setSearchTerm(e.target.value)} />
        <div className={s.searchPanel}>
          <div className={s.dropdown}>
            <button className={s.dropbtn}>All</button>
            <div className={s.dropdownContent}>
              <a href="/anime/filter/-averageRating">descending rating</a>
              <a href="/anime/filter/averageRating">ascending rating</a>
              <a href="/anime/filter/popularityRank">Popularity</a>
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