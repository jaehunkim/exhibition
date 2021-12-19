import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import Exhibition from "views/Exhibition.js";
import BlogPost from "views/examples/BlogPost.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ArtistNote from "views/ArtistNote.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/artistnote" render={(props) => <ArtistNote {...props} />} />
      <Route path="/exhibition" render={(props) => <Exhibition {...props} />} />
      <Route path="/information" render={(props) => <BlogPost {...props} />} />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
