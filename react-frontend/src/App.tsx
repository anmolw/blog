import React from 'react';
import { PostList, SinglePostFromURL } from './components/Posts';
import { Navbar } from './components/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';


function App() {
  return (
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
  );
}

export default App;
