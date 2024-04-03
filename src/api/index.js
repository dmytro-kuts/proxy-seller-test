import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const API = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = async () => {
  try {
    const { data } = await API.get('/users');
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserPosts = async (userId) => {
  try {
    const { data } = await API.get(`/posts?userId=${userId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    throw error;
  }
};

export const getPostById = async (postId) => {
  try {
    const { data } = await API.get(`/posts/${postId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching post ${postId}:`, error);
    throw error;
  }
};

export const getCommentsByPost = async (postId) => {
  try {
    const { data } = await API.get(`/comments?postId=${postId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};

export const getUserAlbums = async (userId) => {
  try {
    const { data } = await API.get(`/albums?userId=${userId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching albums for user ${userId}:`, error);
    throw error;
  }
};

export const getAlbumById = async (albumId) => {
  try {
    const { data } = await API.get(`/albums/${albumId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching album ${albumId}:`, error);
    throw error;
  }
};

export const getPhotosByAlbum = async (albumId) => {
  try {
    const { data } = await API.get(`/photos?albumId=${albumId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching photos for album ${albumId}:`, error);
    throw error;
  }
};

