import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdwFgr3bB-pc1HNA5W3bdK3Yi6P8mfTb30ug&usqp=CAU" />
      {props.message}
      <div> {props.likesCount} ♥ </div>
    </div>
  )
}

export default Post;