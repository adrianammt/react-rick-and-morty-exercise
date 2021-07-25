import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CharactersList from "./pages/CharactersList";
import SingleCharacterPage from "./pages/SingleCharacterPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-Content">
        <Switch>
          <Route path="/character/:id">
            <SingleCharacterPage />
          </Route>
          <Route path="/characters">
            <CharactersList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer className="Footer">
        <input />
        <button>click me</button>
      </footer>
    </div>
  );
}

export default App;
