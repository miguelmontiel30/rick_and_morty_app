import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList'

const App = () => {

  const [characters, setCharacters] = useState([])

  // DECLARING THE URL TO OBTAIN DATA
  let url_page = 'https://rickandmortyapi.com/api/character';

  // OBTAINING DATA FROM API
  const fetch_characters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  };
  
  useEffect(() => {
    fetch_characters(url_page);
  }, []);

  return (
    <>
      <h1 className='h1 text-center'>
        Rick n Morty WEB APP
      </h1>
      <CharacterList characters={characters}/>
    </>
  );
}

export default App;