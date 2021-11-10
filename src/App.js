import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharactersList'
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState([])

  // DECLARING THE URL TO OBTAIN DATA
  let url_page = 'https://rickandmortyapi.com/api/character';

  // OBTAINING DATA FROM API
  const fetch_characters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setPaginationInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetch_characters(url_page);
    console.log(paginationInfo);
  }, [url_page]);

  return (
    <>
      <div className='container-fluid py-4'>
        <h1 className='h1 text-center text-primary my-2'>
          Rick and Morty WEB APP
        </h1>

        <div className='bg-white rounded' style={{ margin: '10px 0px', padding: 10}}>          
          <h2 className="h2 text-center mt-2">Characters List</h2>
          <Pagination paginationInfo={paginationInfo} />
          <CharacterList characters={characters} />          
          <Pagination paginationInfo={paginationInfo} />
        </div>
      </div>
    </>
  );
}

export default App;