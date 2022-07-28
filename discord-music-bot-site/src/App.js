import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Articles from './components/Articles/Articles';
import Commands from './components/Commands/Commands';
import Home from './components/Home/Home';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="projecthighestdiv">
        <AppHeader />
        <Routes>
          <Route exact path="/articles" element={<Articles />} />

          {/* <About /> */}

          <Route exact path="/commands" element={<Commands />} />
          {/* <Users /> */}

          <Route exact path="/" element={<Home />} />

          {/* <Home /> */}
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
