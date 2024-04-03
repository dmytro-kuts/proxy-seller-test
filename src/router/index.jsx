import React from 'react';
import { createBrowserRouter, defer } from 'react-router-dom';

import { getUsers, getUserPosts, getPostById, getCommentsByPost, getUserAlbums, getPhotosByAlbum, getAlbumById } from '../api';

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
        loader: getUsers,
      },
      {
        path: '/user/:userId/posts',
        element: <UserPosts />,
        loader: async ({ params }) => {
          return defer({
            posts: getUserPosts(params.userId),
          });
        },
      },
      {
        path: '/post/:postId/details',
        element: <PostDetails />,
        loader: async ({ params }) => {
          const postId = params.postId;
          return defer({ post: getPostById(postId), comments: getCommentsByPost(postId) });
        },
      },
      {
        path: '/user/:userId/albums',
        element: <UserAlbums />,
        loader: async ({ params }) => {
          return defer({
            albums: getUserAlbums(params.userId),
          });
        },
      },
      {
        path: '/album/:albumId/details',
        element: <AlbumDetails />,
        loader: async ({ params }) => {
          const albumId = params.albumId;
          return defer({ album: getAlbumById(albumId), photos: getPhotosByAlbum(albumId) });
        },
      },
    ],
  },
]);
