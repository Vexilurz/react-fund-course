import React, { useEffect, useMemo, useState } from 'react';
import './styles/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import useFetching from './hooks/useFetching';
import { getPagesCount } from './utils/pages';
import usePagination from './hooks/usePagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const pagesArray = usePagination(totalPages);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (_limit, _page) => {
      const response = await PostService.getAll(_limit, _page);
      setPosts(response.data);
      const totalPosts = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalPosts, _limit));
    }
  );

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
    fetchPosts(limit, pageNumber);
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get posts</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts list 1"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
