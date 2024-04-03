import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, Await } from 'react-router-dom';

import PostList from '../components/PostList';
import Preloader from '../components/Preloader';

const UserPosts = () => {
  const { posts } = useLoaderData();

  return (
    <section className='posts'>
      <Helmet>
        <title>Posts page</title>
        <meta name='description' content='Posts users description' />
      </Helmet>
      <div className='posts__container'>
        <h1 className='posts__title title title--l'>User Posts</h1>
        <Suspense fallback={<Preloader />}>
          <Await resolve={posts}>{(resolvedPosts) => <PostList posts={resolvedPosts} />}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default UserPosts;
