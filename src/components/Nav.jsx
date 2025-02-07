function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://naraccessories.com/?fbclid=PAZXh0bgNhZW0CMTEAAaawGGDIahFyraaqQ_lIhahmTlUw6bbS2u3KnvNZrmMF3pF0ULvvdPu4Hlc_aem_hMnbaTP4Lo4X5k31QRJPhA">
         <img className="logo" src="/img1.png" alt="Nara Accessories" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Prices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
