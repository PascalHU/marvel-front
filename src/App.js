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

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Characters search={search} />} />
        <Route path="/character/" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics search={search} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
