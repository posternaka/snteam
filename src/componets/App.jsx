import axios from 'axios';
import { BrowserRouter } from "react-router-dom";
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions/getPostsAction';
// import {getUsers} from '../redux/actions/getUsersAction';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPosts())
  }, []); 

// console.log(state);

  return (
    <div className="wrapper">
      <BrowserRouter>

        <Header />

        <Main />

        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;