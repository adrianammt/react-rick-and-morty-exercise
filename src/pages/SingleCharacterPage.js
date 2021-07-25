import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  function renderCharacter() {
    let type = character?.type;
    if (type === "") {
      type = "not given";
    }
    return (
      <>
        <h2>{character?.name}</h2>
        <img
          className="Character-Card__image"
          src={character?.image}
          alt={character?.name}
        />
        <ul className="Character-Card__description">
          <li>Status: {character?.status}</li>
          <li>Gender: {character?.gender}</li>
          <li>Species: {character?.species}</li>
          <li>Type: {type}</li>
          <li>Location: {character?.location?.name}</li>
        </ul>
      </>
    );
  }

  return (
    <section className="Character-card--wrapper">{renderCharacter()}</section>
  );
}
