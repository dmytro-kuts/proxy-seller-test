import React from 'react';

const PhotoList = ({ photos }) => {
  return (
    <div className='photo-list'>
      {photos.map((photo) => (
        <div key={photo.id} className='photo-list__item'>
          <h2 className='photo-list__title'>{photo.title}</h2>
          <img src={photo.thumbnailUrl} alt={photo.title} className='photo-list__image' />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
