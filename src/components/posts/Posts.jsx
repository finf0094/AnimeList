import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPostsThunk } from '../../store/postReducer'

import s from './posts.module.css'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.posts)

  useEffect(() => {
    console.log("hello")
    dispatch(getPostsThunk())
  }, [])

  return (
    <div className={s.wrapper}>
      {posts.length > 0 ? (
        posts.map(post => {
          let link = '';
          const text = post.attributes.content;
          const regex = /(https?:\/\/[^\s]+)/g; // регулярное выражение для поиска ссылок
          const matches = text.match(regex); // находим все совпадения
          if (matches && matches.length > 0) {
            link = matches[0]; // берём первую найденную ссылку
            console.log(link); // выводим ссылку в консоль
          }
          return (
            <div key={post.id}>
              {link ? (
                <img src={link} alt="post" style={{ maxWidth: '600px' }} />
              ) : (
                <img
                  src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image.jpg?ver=6"
                  alt="missing"
                  style={{ maxWidth: '600px' }}
                />
              )}
              <h3>{post.attributes.content}</h3>
            </div>
          )
        })
      ) : (
        <div>No posts found.</div>
      )}
    </div>
  )
}

export default Posts