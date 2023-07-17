import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostByID, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getByID(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostID(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostByID(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Post page with ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div style={{ marginTop: 15 }}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostIdPage;
