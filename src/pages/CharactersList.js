import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [nameFilter, setNameFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);

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
    const filterByStatus = characters.filter((character) => {
      if (statusFilter === "Alive") {
        return character.status === "Alive";
      } else if (statusFilter === "Dead") {
        return character.status === "Dead";
      } else if (statusFilter === "Unknown") {
        return character.status === "unknown";
      } else {
        return character;
      }
    });

    return filterByStatus.map((character) => {
      const id = character.id;

      return (
        <section key={id} className="Character-card">
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
      setPageCount(currentPage + 1);
    }
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

  function handleOnChange(event) {
    const inputName = event.target.value;
    setNameFilter(inputName);
  }

  function handleOnChangeStatus(event) {
    const inputStatus = event.target.value;
    setStatusFilter(inputStatus);
  }

  return (
    <>
      <div>
        <input
          type="text"
          id="nameInput"
          name="nameInput"
          placeholder="Type in a character's name"
          onChange={handleOnChange}
        />
        <select name="status" id="status" onChange={handleOnChangeStatus}>
          <option value="">Status</option>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className="CharacterList__pageChange">
        <p onClick={handleClickBack}>⬅️</p>
        <p>Page {pageCount} of 34 </p>
        <p onClick={handleClickNext}>➡️</p>
      </div>
      <div className="CharacterList__wrapper">{renderCharacters()}</div>
      <div className="CharacterList__pageChange">
        <p onClick={handleClickBack}>⬅️</p>
        <p>Page {pageCount} of 34 </p>
        <p onClick={handleClickNext}>➡️</p>
      </div>
    </>
  );
}
