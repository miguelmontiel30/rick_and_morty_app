import React, { useState } from 'react'

const SearchBox = ({ setUrl_page }) => {

    const [search_text, setSearch_text] = useState('')

    const handleSearch = (search_input) => {
        // let descripcion = (gasto.descripcion !== undefined) ? gasto.descripcion : descripcion_input;
        // setDescripcion(descripcion);
        setSearch_text(search_input);
        // console.log(search_input);
        // console.log(search_text);
        setUrl_page('https://rickandmortyapi.com/api/character/?&name=' + search_input);
    }
    return (
        <div className='mt-3'>
            <input
                type="text"
                id="search"
                value={search_text}
                className="form-control mb-4"
                placeholder="Search a Character"
                onChange={(e) => handleSearch(e.target.value)}
            ></input>
        </div>
    )
}

export default SearchBox
