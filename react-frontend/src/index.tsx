import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import reportWebVitals from './reportWebVitals';
import { PostList } from './components/Posts';
import { Navbar } from './components/Navbar';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    {/* <Container> */}
    <PostList />
    {/* </Container> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
