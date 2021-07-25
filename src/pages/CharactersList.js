import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    console.log(pageCount);
    const url = `https://rickandmortyapi.com/api/character/?page=${pageCount}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, [pageCount]);

  function renderCharacters() {
    return characters.map((character) => {
      const id = character.id;

      return (
        <section key={id} className="Character-card--wrapper">
          <Link to={`/character/${id}`}>
            <p>{character.name}</p>
          </Link>
          <img
            className="Character-Card__image"
            src={character.image}
            alt={character.name}
          />
        </section>
      );
    });
  }

  function handleClickNext() {
    let currentPage = pageCount;
    console.log(currentPage);
    if (currentPage === 34) {
      setPageCount(34);
    } else {
    }
    setPageCount(currentPage + 1);
  }

  function handleClickBack() {
    let currentPage = pageCount;
    console.log(currentPage);
    if (currentPage === 1) {
      setPageCount("");
    } else {
      setPageCount(currentPage - 1);
    }
  }

  return (
    <>
      <div>
        <button onClick={handleClickBack}>Previous</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
      <div className="CharacterList__wrapper">{renderCharacters()}</div>
      <div>
        <p onClick={handleClickBack}>⬅️</p>
        <p onClick={handleClickNext}>➡️</p>
      </div>
    </>
  );
}
