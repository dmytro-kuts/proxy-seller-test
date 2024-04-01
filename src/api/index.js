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

export const getPostDetails = async (postId) => {
  try {
    const [postResponse, commentsResponse] = await Promise.all([API.get(`/posts/${postId}`), API.get(`/comments?postId=${postId}`)]);

    const post = postResponse.data;
    const comments = commentsResponse.data;

    return { post, comments };
  } catch (error) {
    console.error(`Error fetching post details for post ${postId}:`, error);
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

export const getAlbumDetails = async (albumId) => {
  try {
    const [albumResponse, photosResponse] = await Promise.all([API.get(`/albums/${albumId}`), API.get(`/photos?albumId=${albumId}`)]);

    const album = albumResponse.data;
    const photos = photosResponse.data;

    return { album, photos };
  } catch (error) {
    console.error(`Error fetching album details for album ${albumId}:`, error);
    throw error;
  }
};
