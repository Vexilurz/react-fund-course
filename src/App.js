import React, {useState} from 'react';
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body: 'Description'},
      {id: 2, title: 'JavaScript 2', body: 'Description'},
      {id: 3, title: 'JavaScript 3', body: 'Description'},
  ]);

  return (
    <div className="App">
        <form>
            <input type="text" placeholder="Post name"/>
            <input type="text" placeholder="Post description"/>
            <MyButton disabled>Create post</MyButton>
        </form>
        <PostList posts={posts} title='Posts list 1'/>
    </div>
  );
}

export default App;
