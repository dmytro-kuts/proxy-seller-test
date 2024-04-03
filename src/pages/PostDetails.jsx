import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, Await } from 'react-router-dom';

import CommentList from '../components/CommentList';
import Preloader from '../components/Preloader';

const PostDetails = () => {
  const { post, comments } = useLoaderData();
  console.log(post, comments );
  return (
    <section className='post-details'>
      <Helmet>
        <title>{post ? post.title : 'Post Details'}</title>
        <meta name='description' content={post ? `Details and comments for ${post.title}` : 'Post details and comments'} />
      </Helmet>
      <div className='post-details__container'>
        <Suspense fallback={<Preloader />}>
          <Await resolve={post}>
            {(resolvedPost) => (
              <>
                <h1 className='post-details__title title title--l'>{resolvedPost?.title}</h1>
                <p className='post-details__body'>{resolvedPost?.body}</p>
              </>
            )}
          </Await>
        </Suspense>
        <h2 className='post-details__comments-title title title--m'>Comments:</h2>
        <Suspense fallback={<Preloader />}>
          <Await resolve={comments}>{(resolvedComments) => <CommentList comments={resolvedComments} />}</Await>
        </Suspense>

      </div>
    </section>
  );
};

export default PostDetails;
