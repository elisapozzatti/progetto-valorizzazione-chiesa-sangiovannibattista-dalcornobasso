import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isPageOpen, setIsPageOpen] = useState("/");
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">
            Chiesa di San Giovanni Battista al Corno Basso
          </h1>
          <h2 className="header-subtitle">
            San Vito al Mantico · Bussolengo (VR) · 1734–1735
          </h2>
        </div>
        <img src="/logo.png" className="header-logo" />
      </div>
      <nav className="header-nav">
        <Link
          to="/"
          className="header-nav-item"
          onClick={() => setIsPageOpen("/")}
          style={{
            backgroundColor: location.pathname === "/" ? "#a08060" : "#c8b89a",
          }}
        >
          Esplora
        </Link>
        <Link
          to="/vista3d"
          className="header-nav-item"
          onClick={() => setIsPageOpen("/vista3d")}
          style={{
            backgroundColor:
              location.pathname === "/vista3d" ? "#a08060" : "#c8b89a",
          }}
        >
          Vista 3D
        </Link>
        <Link
          to="/storia"
          className="header-nav-item"
          onClick={() => setIsPageOpen("/storia")}
          style={{
            backgroundColor:
              location.pathname === "/storia" ? "#a08060" : "#c8b89a",
          }}
        >
          Storia
        </Link>
        <Link
          to="/quiz"
          className="header-nav-item"
          onClick={() => setIsPageOpen("/quiz")}
          style={{
            backgroundColor:
              location.pathname === "/quiz" ? "#a08060" : "#c8b89a",
          }}
        >
          Quiz
        </Link>
        <Link
          to="/abbina"
          className="header-nav-item"
          onClick={() => setIsPageOpen("/abbina")}
          style={{
            backgroundColor:
              location.pathname === "/abbina" ? "#a08060" : "#c8b89a",
          }}
        >
          Abbina
        </Link>
      </nav>
    </header>
  );
}

export default Header;
