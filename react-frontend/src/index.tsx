import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import reportWebVitals from './reportWebVitals';
import { PostList, SinglePost, SinglePostFromURL } from './components/Posts';
import { Navbar } from './components/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <Container style={{ marginTop: "5rem" }}><p>About this blog</p></Container>
        </Route>
        <Route path="/posts/:id" children={<SinglePostFromURL />} />
        <Route path="/">
          <PostList />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
