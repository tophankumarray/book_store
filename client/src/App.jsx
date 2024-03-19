import React from 'react';
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CreateBooks from './Pages/CreateBooks';
import ShowBooks from './Pages/ShowBooks';
import EditBooks from './Pages/EditBooks';
import DeleteBooks from './Pages/DeleteBooks';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBooks />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
          <Route path="/books/edit/:id" element={<EditBooks />} />
          <Route path="/books/delete/:id" element={<DeleteBooks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App