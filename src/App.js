// import npm
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import css
import "./reset.css";
import "./App.css";

//import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import routes
import Characters from "./containers/Characters/Characters";
import CharacterDetails from "./containers/CharacterDetails/CharacterDetails";
import Comics from "./containers/Comics/Comics";
import Favorites from "./containers/Favorites/Favorites";
import SignInUp from "./containers/SignInUp/SignInUp";
import ComicDetail from "./containers/ComicDetails/ComicDetails";
// import font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeartCrack, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
library.add(faHeartCrack, faHeart);

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLoading1, setIsLoading1] = useState(true);

  const [search, setSearch] = useState("");
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );
  // const [comicsList, setComicsList] = useState([]);
  // const [charactersList, setCharactersList] = useState([]);

  // useEffect(() => {
  //   const searchComics = async () => {
  //     const response = await axios.get("http://localhost:4000/allcomics");
  //     setComicsList(response.data);
  //     setIsLoading1(false);
  //   };

  //   const searchCharacters = async () => {
  //     const response = await axios.get("http://localhost:4000/allcharacters");
  //     setCharactersList(response.data);
  //     setIsLoading(false);
  //   };
  //   searchComics();
  //   searchCharacters();
  // }, []);

  const isLogged = (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
    setUser(user);
  };
  const changeFavorite = async (addOrRemove, page, id) => {
    const response = await axios.post(
      `https://marvel-backend-ph.herokuapp.com/favorite`,
      {
        addOrRemove: addOrRemove,
        userId: user._id,
        type: page,
        idToChange: id,
      }
    );

    setUser(response.data);
  };

  return (
    <Router>
      <Header
        setSearch={setSearch}
        search={search}
        isLogged={isLogged}
        user={user}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              setSearch={setSearch}
              search={search}
              user={user}
              changeFavorite={changeFavorite}
              // charactersList={charactersList}
            />
          }
        />
        <Route
          path="/character/"
          element={
            <CharacterDetails changeFavorite={changeFavorite} user={user} />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              setSearch={setSearch}
              search={search}
              user={user}
              changeFavorite={changeFavorite}
              // comicsList={comicsList}
            />
          }
        />
        <Route
          path="/comic"
          element={<ComicDetail changeFavorite={changeFavorite} user={user} />}
        />
        <Route
          path="/favorites"
          element={<Favorites user={user} changeFavorite={changeFavorite} />}
        />
        <Route path="/sign" element={<SignInUp isLogged={isLogged} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
