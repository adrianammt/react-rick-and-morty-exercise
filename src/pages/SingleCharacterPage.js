import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function SingleCharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  let history = useHistory();
  // const [nextId, setNextId] = useState({ id });

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
      type = "---";
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

  function handleClickNext() {
    history.push(`/character/${Number(id) + 1}`);
  }

  function handleClickBack() {
    history.push(`/character/${Number(id) - 1}`);
  }

  return (
    <section className="Character-card__wrapper">
      <div className="Character-card__wrapper">
        <p onClick={handleClickBack}>⬅️ Back -</p>
        <p onClick={handleClickNext}>- Next ➡️</p>
      </div>
      <div className="Character-card">{renderCharacter()}</div>
      <p>Character {id} of 671 characters.</p>
    </section>
  );
}
