import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <ul className='comment-list'>
      {comments.map(comment => (
        <li key={comment.id} className='comment-list__item'>
          <h3 className='comment-list__name title'>{comment.name}</h3>
          <p className='comment-list__email'>{comment.email}</p>
          <p className='comment-list__body'>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
