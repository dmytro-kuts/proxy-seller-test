import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <ul className='users__items'>
      {users.map((user) => (
        <li className='users__item' key={user.id}>
          <h2 className='users__item-title title title--m'>{user.username}</h2>

          <div className='users__actions'>
            <Link to={`/user/${user.id}/posts`} className='users__button button button--primary'>
              Posts
            </Link>
            <Link to={`/user/${user.id}/albums`} className='users__button button button--primary'>
              Albums
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
