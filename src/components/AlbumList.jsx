import React from 'react';
import { Link } from 'react-router-dom';

const AlbumList = ({ albums }) => {
  return (
    <ul className='albums__items'>
      {albums.map((album) => (
        <li className='albums__item' key={album.id}>
          <h2 className='albums__item-title title title--m'>{album.title}</h2>
          <Link to={`/album/${album.id}/details`} className='albums__button button button--primary'>
            View Album
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AlbumList;
