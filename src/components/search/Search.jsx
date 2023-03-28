import React from 'react'

import s from './search.module.css'

import search from '../../icons/search.png'

const Search = () => {
  return (
    <div className={s.wrapper} >
      <div className={s.input}>
        <input type="search" placeholder='Search Anime, Manga and more...' />
        <div className={s.searchPanel}>
          <div class={s.dropdown}>
            <button class={s.dropbtn}>All</button>
            <div class={s.dropdownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <button className={s.searchBtn}>
            <img src={search} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search