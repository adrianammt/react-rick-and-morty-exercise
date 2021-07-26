import Home from "./pages/Home";
import CharactersList from "./pages/CharactersList";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
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
  );
}
