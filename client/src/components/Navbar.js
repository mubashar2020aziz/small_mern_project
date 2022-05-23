import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#//">
            Mern Developer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ bsScrollHeight: '100px' }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/down">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/down">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/down">
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/down">
                  Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
