import { NavLink } from "react-router-dom";
import rickAndMorty from "../images/rickAndMorty.jpg";
import "./Home.css";

export default function Home() {
  return (
    <section className="Home-content">
      <h1>Welcome to the Rick and Morty App!</h1>
      <img className="Home-Img" src={rickAndMorty} alt="Rick and Morty" />
      <NavLink to="/characters">
        <h2>Learn about all the characters!</h2>
      </NavLink>
    </section>
  );
}
