import React from 'react'

import s from './header.module.css'

import speaker from '../../icons/speaker.png'
import { Link } from 'react-router-dom'

const NavHeader = () => {


  return (

    <div className={s.row}>

      <h2 className={s.logo}>MyAnimeList</h2>

      <ul className={s.list}>
        <li><Link to="/anime">Anime</Link></li>
        <li><Link to="/manga">Manga</Link></li>
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