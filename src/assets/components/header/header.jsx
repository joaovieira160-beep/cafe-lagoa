import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="../../../imagens/café.jpg"
            alt="logo"
          />
          <span className="logo-text">Café lagoa</span>
        </div>

        <nav className="nav">
            <a href="#" className="btn-inicio">
            inicio
          </a>
          <a href="#">catagolo</a>
          <a href="#">sobre</a>
          <a href="#">contato</a>
          
          
        </nav>
      </div>
    </header>
  );
}

export default Header;