import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import UserPosts from '../pages/UserPosts';
import PostDetails from '../pages/PostDetails';
import UserAlbums from '../pages/UserAlbums';
import AlbumDetails from '../pages/AlbumDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/user/:userId/posts',
        element: <UserPosts />,
      },
      {
        path: '/post/:postId/details',
        element: <PostDetails />,
      },
      {
        path: '/user/:userId/albums',
        element: <UserAlbums />,
      },
      {
        path: '/album/:albumId/details',
        element: <AlbumDetails />,
      },
    ],
  },
]);
