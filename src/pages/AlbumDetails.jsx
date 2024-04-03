import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, Await } from 'react-router-dom';

import PhotoList from '../components/PhotoList';
import Preloader from '../components/Preloader';

const AlbumDetails = () => {
  const { album, photos } = useLoaderData();

  return (
    <section className='album-details'>
      <Helmet>
        <title>{album ? album.title : 'Album Details'}</title>
        <meta name='description' content='Album details and photos' />
      </Helmet>
      <div className='album-details__container'>
        <Suspense fallback={<Preloader />}>
          <Await resolve={album}>
            {(resolvedAlbum) => {
              <h1 className='album-details__title title title--l'>{resolvedAlbum.title}</h1>;
            }}
          </Await>
        </Suspense>

        <Suspense fallback={<Preloader />}>
          <Await resolve={photos}>
            {(resolvedPhotos) => <PhotoList photos={resolvedPhotos} />}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default AlbumDetails;
