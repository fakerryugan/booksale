import React, { useState } from 'react';

function Book({ books, onAddBook }) {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;
    
    onAddBook({
      ...newBook,
      year: parseInt(newBook.year) || new Date().getFullYear(),
      image: newBook.image || "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80"
    });

    setNewBook({ title: '', author: '', year: '', description: '', image: '' });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="display-5 fw-bold text-dark">Koleksi Buku</h1>
          <p className="lead text-secondary mb-0">Temukan buku-buku terbaik dari perpustakaan kami.</p>
        </div>
        <button 
          className={`btn ${showForm ? 'btn-secondary' : 'btn-primary'} btn-lg shadow-sm rounded-pill px-4`}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Batal' : '+ Tambah Buku'}
        </button>
      </div>

      {showForm && (
        <div className="card shadow-sm border-0 rounded-4 mb-5 p-4">
          <h4 className="fw-bold mb-3">Formulir Buku Baru</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" name="title" value={newBook.title} onChange={handleChange} className="form-control form-control-lg" placeholder="Judul Buku" required />
              </div>
              <div className="col-md-6">
                <input type="text" name="author" value={newBook.author} onChange={handleChange} className="form-control form-control-lg" placeholder="Penulis" required />
              </div>
              <div className="col-md-4">
                <input type="number" name="year" value={newBook.year} onChange={handleChange} className="form-control form-control-lg" placeholder="Tahun Terbit" />
              </div>
              <div className="col-md-8">
                <input type="text" name="image" value={newBook.image} onChange={handleChange} className="form-control form-control-lg" placeholder="URL Gambar Promosi (Opsional)" />
              </div>
              <div className="col-12">
                <textarea name="description" value={newBook.description} onChange={handleChange} className="form-control form-control-lg" rows="3" placeholder="Deskripsi Singkat"></textarea>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-success btn-lg px-5 rounded-pill shadow-sm">Simpan Data</button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img 
                src={book.image} 
                className="card-img-top" 
                alt={book.title} 
                style={{ height: "250px", objectFit: "cover" }} 
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-primary rounded-pill text-uppercase">{book.year}</span>
                  <small className="text-muted fw-bold">By {book.author}</small>
                </div>
                <h5 className="card-title fw-bold text-dark">{book.title}</h5>
                <p className="card-text text-muted">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
