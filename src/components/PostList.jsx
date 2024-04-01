import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <ul className='posts__items'>
      {posts.map((post) => (
        <li className='posts__item' key={post.id}>
          <h2 className='posts__list-title title title--m'>{post.title}</h2>
          <p className='posts__list-text text '>{post.body}</p>
          <Link to={`/post/${post.id}/details`} className='posts__button button button--primary'>
            View Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
