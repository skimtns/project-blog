import React, { Fragment } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Posts from './components/Posts';
import Post from './components/Post';
// import Comments from './components/Comments';
// import Comment from './components/Comment';
import NoMatch from './components/NoMatch'
// main page 

const App = () => (
  <Fragment>
    {/* <Navbar /> */}
    <Switch>
      <Route exact path='/' component={Blogs} />
      <Route exact path='/blogs' component={Blogs} />
      <Route exact path='/blogs/:id' component={Blog} />
      <Route exact path='/blogs/:blog_id/posts' component={Posts} />
      <Route exact path='/blogs/:blog_id/posts/:id' component={Post} />
      {/* <Route exact path='/blogs/:blog_id/posts' component={Post} /> */}
      {/* <Route exact path='/blogs/:blog_id/posts/:product_id/comments' component={Comments} /> */}
      {/* <Route exact path='/blogs/:blog_id/posts/:product_id/comments/:id' component={Comment} /> */}
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;

