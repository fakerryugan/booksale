import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold">Hubungi Kami</h1>
          <p className="lead text-muted">
            Ada pertanyaan atau butuh bantuan? Jangan ragu untuk mengirimkan pesan. Kami siap membantu Anda terkait koleksi buku maupun pesanan Anda.
          </p>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h3 className="fw-bold mb-4">Kirim Pesan</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Nama Lengkap</label>
                  <input type="text" className="form-control form-control-lg rounded-3" id="name" placeholder="Masukkan nama Anda" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Alamat Email</label>
                  <input type="email" className="form-control form-control-lg rounded-3" id="email" placeholder="nama@email.com" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                  <textarea className="form-control rounded-3" id="message" rows="5" placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold rounded-pill">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="h-100 p-5 bg-primary text-white rounded-4 shadow-lg d-flex flex-column justify-content-center">
            <h3 className="fw-bold mb-4">Informasi Kontak</h3>
            <p className="fs-5 mb-4">
              Silakan mampir ke toko fisik kami atau hubungi kami melalui platform di bawah ini.
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-map-location-dot fs-4 text-primary"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Alamat</h5>
                <p className="mb-0 text-white-50">Jl. Jend. Sudirman No. 123, Jakarta Selatan</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-phone fs-4 text-primary"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Telepon</h5>
                <p className="mb-0 text-white-50">+62 812 3456 7890</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-envelope fs-4 text-primary"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Email</h5>
                <p className="mb-0 text-white-50">halo@bookstore.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
