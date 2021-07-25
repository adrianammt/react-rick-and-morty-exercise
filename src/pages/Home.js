import rickAndMorty from "../images/rickAndMorty.jpg";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Rick and Morty App!</h1>
      <img className="Home-Img" src={rickAndMorty} alt="Rick and Morty" />
      <h2>Lear about all characters!</h2>
    </>
  );
}
