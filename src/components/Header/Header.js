import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo_marvel.svg";
const Header = ({ setSearch, isLogged, user }) => {
  const navigate = useNavigate();

  const disconnect = () => {
    isLogged("");
    navigate("/");
  };
  return (
    <header>
      <div className="header container">
        <img
          className="marvel_logo"
          src={logo}
          alt="Marvel logo"
          onClick={() => navigate("/")}
        />

        <nav>
          <span
            onClick={() => {
              document.getElementById("searchbar");
              setSearch("");
              navigate("/");
            }}
          >
            Personnages
          </span>
          <span
            onClick={() => {
              setSearch("");
              navigate("/comics");
            }}
          >
            Comics
          </span>
          <span
            onClick={() => (user ? navigate("/favorites") : navigate("/sign"))}
          >
            Favoris
          </span>
          {user ? (
            <span className="disconnect-btn" onClick={disconnect}>
              Se deconnecter
            </span>
          ) : (
            <span onClick={() => navigate("/sign")}>Se connecter</span>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
