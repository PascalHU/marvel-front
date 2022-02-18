// import npm
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

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
        isLogged={isLogged}
        user={user}
        search={search}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              search={search}
              user={user}
              changeFavorite={changeFavorite}
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
              search={search}
              user={user}
              changeFavorite={changeFavorite}
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
