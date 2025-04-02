import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NotFound.scss"; // SCSS stil dosyası

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="notfound-container">
      <div className="emoji">🚫</div>
      <h1 className="notfound-title">404 - Seite nicht gefunden</h1>
      <p className="notfound-message">
        Entschuldigung, diese Seite existiert nicht! <br />
        Sie werden in <strong>5 Sekunden</strong> zur Startseite weitergeleitet...
      </p>
      <button className="home-button" onClick={() => navigate("/")}>
        Zur Startseite
      </button>
    </div>
  );
}

export default NotFound;

