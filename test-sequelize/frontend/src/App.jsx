import { useState, useEffect } from "react";
import Form from "./components/Characters/Form";
import List from "./components/Characters/List";

function App() {
  const [listCharacters, updateListCharacters] = useState([]);
  const [needUpdate, setNeedUpdate] = useState(true);

  const updateCharacter = (character) => {
    createCharacter(character);
    //updateListCharacters([...listCharacters, character]);
  };
  async function getCharacters() {
    const response = await fetch("http://localhost:8000/api/characters");
    const list = await response.json();
    updateListCharacters(list ?? []);
  }

  async function createCharacter(data) {
    const response = await fetch("http://localhost:8000/api/characters", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setNeedUpdate(true);
  }

  useEffect(() => {
    if (needUpdate) {
      getCharacters();
      setNeedUpdate(false);
    }
  }, [needUpdate]);

  return (
    <>
      <List characters={listCharacters} />
      <Form updateCharacter={updateCharacter} />
    </>
  );
}

export default App;
