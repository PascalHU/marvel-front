import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo_marvel.svg";
const Header = ({ setSearch }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header container">
        <img
          className="marvel_logo"
          src={logo}
          alt="Marvel logo"
          onClick={() => navigate("/")}
        />
        <input
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <nav>
          <span onClick={() => navigate("/")}>Personnages</span>
          <span onClick={() => navigate("/comics")}>Comics</span>
          <span>Favoris</span>
          <span>Signin</span>
        </nav>
      </div>
    </header>
  );
};
export default Header;
