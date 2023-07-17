import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context/context';

function Navbar() {
  const { setIsAuth } = useContext(AuthContext);
  return (
    <div className={cl.navbar}>
      <MyButton onClick={() => setIsAuth(false)}>Logout</MyButton>
      <div className={cl.navbar__links}>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}

export default Navbar;
