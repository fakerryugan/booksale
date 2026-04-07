import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Book from './pages/Book';
import booksData from './Utils/books';

function App() {
  const [books, setBooks] = useState(booksData);

  const handleAddBook = (newBook) => {
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { ...newBook, id: newId }]);
  };

  const navLinkStyle = ({ isActive }) => 
    `nav-link px-3 fw-semibold transition-all ${
      isActive 
        ? 'text-primary border-bottom border-primary border-3 pb-1' 
        : 'link-secondary'
    }`;

  return (
    <Router>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-white sticky-top shadow-sm px-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link 
            to="/" 
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <i className="fa-solid fa-book fa-2xl" style={{ color: "rgb(116, 192, 252)" }}></i>
            <span className="ms-2 fs-4 fw-bold text-primary">Bookstore</span>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" className={navLinkStyle} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className={navLinkStyle}>
              Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className={navLinkStyle}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2 px-4 shadow-sm">Login</button>
          <button type="button" className="btn btn-primary px-4 shadow-sm">Register</button>
        </div>
      </header>

      <main className="min-vh-100 bg-light">
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/books" element={<Book books={books} onAddBook={handleAddBook} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link px-2 text-body-secondary">Book</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-body-secondary">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2026 Bookstore, Inc. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;