import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { getAlbumDetails } from '../api';
import PhotoList from '../components/PhotoList';
import Preloader from '../components/Preloader';

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAlbumDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const albumData = await getAlbumDetails(albumId);
      setAlbum(albumData);
    } catch (error) {
      console.error('Error fetching album details:', error);
    } finally {
      setIsLoading(false);
    }
  }, [albumId]);

  useEffect(() => {
    fetchAlbumDetails();
  }, [fetchAlbumDetails]);

  return (
    <section className='album-details'>
      <Helmet>
        <title>{album ? album.album.title : 'Album Details'}</title>
        <meta name='description' content='Album details and photos' />
      </Helmet>
      <div className='album-details__container'>
        {isLoading ? (
          <Preloader />
        ) : album ? (
          <>
            <h1 className='album-details__title title title--l'>{album.album.title}</h1>
            <PhotoList photos={album.photos} />
          </>
        ) : (
          <div>Album details could not be loaded.</div>
        )}
      </div>
    </section>
  );
};

export default AlbumDetails;
