import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, Await } from 'react-router-dom';

import AlbumList from '../components/AlbumList';
import Preloader from '../components/Preloader';

const UserAlbums = () => {
  const { albums } = useLoaderData();

  return (
    <section className='albums'>
      <Helmet>
        <title>Albums page </title>
        <meta name='description' content='Albums users description' />
      </Helmet>
      <div className='albums__container'>
        <h1 className='albums__title title title--l'> User Albums </h1>
        <Suspense fallback={<Preloader />}>
          <Await resolve={albums}>{(resolvedAlbums) => <AlbumList albums={resolvedAlbums} />}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default UserAlbums;
