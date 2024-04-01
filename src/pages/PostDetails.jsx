import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { getPostDetails } from '../api';
import CommentList from '../components/CommentList';
import Preloader from '../components/Preloader';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPostDetails = useCallback(async () => {
    try {
      const { post, comments } = await getPostDetails(postId);
      setPost(post);
      setComments(comments);
    } catch (error) {
      console.error('Error fetching post details:', error);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchPostDetails();
  }, [fetchPostDetails]);

  return (
    <section className='post-details'>
      <Helmet>
        <title>{post ? post.title : 'Post Details'}</title>
        <meta name='description' content={post ? `Details and comments for ${post.title}` : 'Post details and comments'} />
      </Helmet>
      <div className='post-details__container'>
        {isLoading ? (
          <Preloader />
        ) : post ? (
          <>
            <h1 className='post-details__title title title--l'>{post.title}</h1>
            <p className='post-details__body'>{post.body}</p>
            <h2 className='post-details__comments-title title title--m'>Comments:</h2>
            <CommentList comments={comments} />
          </>
        ) : (
          <div>Unable to load post details. Please try again later.</div>
        )}
      </div>
    </section>
  );
};

export default PostDetails;
