import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import BlogPost from "views/examples/BlogPost.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/about" render={(props) => <BlogPost {...props} />} />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
