import React, { useState } from 'react';
import './styles/App.css';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('getSortedPosts()');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By content' },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Posts list 1"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts found</h1>
      )}
    </div>
  );
}

export default App;
