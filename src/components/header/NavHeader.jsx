import React from 'react'

import s from './header.module.css'

import speaker from '../../icons/speaker.png'
import { Link, NavLink } from 'react-router-dom'
import { clearFilterAC } from '../../store/animeReducer'

const NavHeader = () => {

  const clear = (e) => {
    e.preventDefault
    dispatch(clearFilterAC())
  }
  return (

    <div className={s.row}>

      <h2 className={s.logo}>MyAnimeList</h2>

      <ul className={s.list}>
        <li><NavLink to="/anime" className={({isActive}) =>
          isActive ? s.active : ""} onClick={clear}>Anime</NavLink></li>
        <li><NavLink to="/manga" className={({isActive}) =>
          isActive ? s.active : ""} onClick={clear}>Manga</NavLink></li>
        <li>Community</li>
        <li>Industry</li>
        <li>Watch</li>
        <li>Store</li>
      </ul>

      <div className={s.hideAds}>
        <img src={speaker} />
        <p>Hide Ads</p>
      </div>

    </div>
  )
}

export default NavHeader