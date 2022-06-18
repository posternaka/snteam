import { BrowserRouter } from "react-router-dom";
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions/getPostsAction';
import {fetchUsers} from '../redux/actions/getUsersAction';
import { AuthProvider } from './hoc/AuthProvider';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, []); 


  return (
    <div className="wrapper">
      <BrowserRouter>
        <AuthProvider>

          <Header />

          <Main />

          <Footer />

        </AuthProvider>  
      </BrowserRouter>
    </div>
  );
}

export default App;