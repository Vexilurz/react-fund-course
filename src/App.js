import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('title');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form className="create-post-form">
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />
        {/* Неуправляемый\Неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList
        posts={posts}
        title="Posts list 1"
      />
    </div>
  );
}

export default App;
