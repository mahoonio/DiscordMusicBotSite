import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppHeader from './components/AppHeader';
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <AppHeader />

        {/* A <Routes> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/articles">
            {/* <About /> */}
          </Route>
          <Route exact path="/commands">
            {/* <Users /> */}
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
