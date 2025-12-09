import React from "react";
import {
  ApolloProvider
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import NavBar from "./components/NavBar.jsx";


function App() {

  return (
    <>
      <ApolloProvider >
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
