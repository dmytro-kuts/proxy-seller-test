import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getUserAlbums } from '../api';

import AlbumList from '../components/AlbumList';
import Preloader from '../components/Preloader';

const UserAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlbums = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedAlbums = await getUserAlbums(userId);
      setAlbums(fetchedAlbums);
    } catch (error) {
      setError('Failed to fetch albums.');
      console.error('Error fetching albums:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <section className='albums'>
      <Helmet>
        <title>Albums page </title>
        <meta name='description' content='Albums users description' />
      </Helmet>
      <div className='albums__container'>
        <h1 className='albums__title title title--l'> User Albums </h1>
        {isLoading ? <Preloader /> : albums ? <AlbumList albums={albums} /> : <div>Unable to load albums. Please try again later.</div>}
      </div>
    </section>
  );
};

export default UserAlbums;
