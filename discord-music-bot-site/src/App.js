import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Articles from './components/Articles/Articles';
import Commands from './components/Commands/Commands';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import SingleArticlePage from './components/Articles/SingleArticlePage';
function App() {
  return (
    <Router>
      <div className="projecthighestdiv">
        <AppHeader />
        <Routes>
          <Route exact path="/articles" element={<Articles />} />
          <Route
            exact
            path="/article/:articleName"
            element={<SingleArticlePage />}
          />
          <Route exact path="/commands" element={<Commands />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
