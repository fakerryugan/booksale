import React from 'react';

function Home({ books = [] }) {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-white">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-primary mb-3">
              Temukan Buku Favoritmu di Bookstore
            </h1>
            <p className="lead text-secondary mb-4">
              Kami menyediakan berbagai koleksi buku terbaik, mulai dari fiksi, non-fiksi, hingga buku pelajaran.
              Jelajahi dunia melalui setiap halaman dan dapatkan penawaran spesial setiap harinya!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold shadow-sm">
                Lihat Koleksi
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4 shadow-sm">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
            <img 
              className="rounded-lg-3 img-fluid w-100" 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tumpukan Buku" 
            />
          </div>
        </div>
      </div>

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h2 className="fw-bold text-dark">Rekomendasi Minggu Ini</h2>
            <p className="lead text-muted">
              Pilihan editor kami untuk menemani waktu luang Anda. Temukan karya-karya luar biasa yang akan mengubah cara pandang Anda.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.slice(0, 3).map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <img 
                    src={book.image} 
                    className="card-img-top" 
                    alt={book.title} 
                    style={{ height: "250px", objectFit: "cover" }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{book.title}</h5>
                    <p className="card-text text-muted">{book.description}</p>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center pb-3">
                    <button type="button" className="btn btn-sm btn-primary px-3 rounded-pill">Beli Sekarang</button>
                    <span className="text-primary fw-bold text-uppercase">{book.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
