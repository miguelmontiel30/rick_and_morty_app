import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharactersList'
import Header from './components/Header';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState([])
  
  // DECLARING THE URL TO OBTAIN DATA
  const [url_page, setUrl_page] = useState('https://rickandmortyapi.com/api/character')
  // let url_page = 'https://rickandmortyapi.com/api/character';

  // OBTAINING DATA FROM API
  const fetch_characters = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setPaginationInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetch_characters(url_page);
    // console.log(paginationInfo);
  }, [url_page]);

  return (
    <>
      <div className='container-fluid py-4'>
        
        <Header />

        <div className='bg-white rounded' style={{ margin: '10px 0px', padding: 10}}>          
          <h2 className="h2 text-center mt-2">Characters List</h2>
          <Pagination paginationInfo={paginationInfo} setUrl_page={setUrl_page} />
          <CharacterList characters={characters} />
        </div>
      </div>
    </>
  );
}

export default App;