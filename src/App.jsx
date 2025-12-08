import React from "react";
import {
  ApolloProvider
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
// import Nav from "./components/NavBar";

function App() {

  return (
    <>
      <ApolloProvider >
        {/* <Nav /> */}
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
