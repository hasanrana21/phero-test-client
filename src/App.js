import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/HomePage/Header/Header';
import Home from './Components/HomePage/Home/Home';
import Post from './Components/Shared/Post/Post';
import BlogsInfo from './Components/Shared/BlogsInfo/BlogsInfo';


function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        <Switch>
          <Route path="/blogsInfo/:selectId">
            <BlogsInfo/>
          </Route>
          <Route path="/post">
            <Post/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
