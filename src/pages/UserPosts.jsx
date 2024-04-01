import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import PostList from '../components/PostList';
import Preloader from '../components/Preloader';

import { getUserPosts } from '../api';

const UserPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getUserPosts(userId);
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <section className='posts'>
      <Helmet>
        <title>Posts page</title>
        <meta name='description' content='Posts users description' />
      </Helmet>
      <div className='posts__container'>
        <h1 className='posts__title title title--l'>User Posts</h1>
        {isLoading ? <Preloader /> : posts ? <PostList posts={posts} /> : <div>Unable to load posts. Please try again later.</div>}
      </div>
    </section>
  );
};

export default UserPosts;
