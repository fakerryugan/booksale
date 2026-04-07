import React from 'react';

function Team() {
  return (
    <div className="container py-5">
      <div className="row text-center text-white mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 text-dark fw-bold">Tim Kami</h1>
          <p className="lead text-secondary">
            Mengenal lebih dekat orang-orang luar biasa di balik layar Bookstore yang berdedikasi tinggi untuk memberikan pelayanan terbaik bagi Anda.
          </p>
        </div>
      </div>

      <div className="row g-4 align-items-center">
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded-4 shadow-sm py-5 px-4 text-center border">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="CEO" width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" 
            />
            <h5 className="mb-0 fw-bold">Budi Santoso</h5>
            <span className="small text-uppercase text-muted">CEO & Founder</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-facebook-f text-primary"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-twitter text-info"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-instagram text-danger"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded-4 shadow-sm py-5 px-4 text-center border">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Marketing Manager" width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" 
            />
            <h5 className="mb-0 fw-bold">Siti Aminah</h5>
            <span className="small text-uppercase text-muted">Marketing Manager</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-facebook-f text-primary"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-twitter text-info"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-instagram text-danger"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded-4 shadow-sm py-5 px-4 text-center border">
            <img 
              src="https://randomuser.me/api/portraits/men/85.jpg" 
              alt="IT Support" width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" 
            />
            <h5 className="mb-0 fw-bold">Ahmad Reza</h5>
            <span className="small text-uppercase text-muted">Lead Developer</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-facebook-f text-primary"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-twitter text-info"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-instagram text-danger"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded-4 shadow-sm py-5 px-4 text-center border">
            <img 
              src="https://randomuser.me/api/portraits/women/65.jpg" 
              alt="Customer Service" width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" 
            />
            <h5 className="mb-0 fw-bold">Dewi Lestari</h5>
            <span className="small text-uppercase text-muted">Customer Service</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-facebook-f text-primary"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-twitter text-info"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-instagram text-danger"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
