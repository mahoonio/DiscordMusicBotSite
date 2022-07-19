import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Articles from './components/Articles/Articles';
import Commands from './components/Commands/Commands';
import Home from './components/Home/Home';
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

        {/* A <Routes> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <AppHeader />
        <Routes>
          <Route exact path="/articles" element={<Articles />} />

          {/* <About /> */}

          <Route exact path="/commands" element={<Commands />} />
          {/* <Users /> */}

          <Route exact path="/" element={<Home />} />

          {/* <Home /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
