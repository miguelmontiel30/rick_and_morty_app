import React from 'react'
import CharacterItem from './CharacterItem';
// import CharacterModal from './CharacterModal';

const CharacterList = ({ characters = [] }) => {

    return (
        <>
            <div className="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    characters.length === 0
                    ? <h3 className="h3 text-center mt-2">There's no coincidences</h3>
                    :
                    characters.map((character, index) => {
                        return (
                            <CharacterItem key={index} character={character} />
                        )
                    })
                }
            </div>

            {/* { mostrarModal === true ? <CharacterModal setMostrarModal={setMostrarModal} character={characters} /> : null} */}
            {/* <CharacterModal /> */}

        </>
    )
}

export default CharacterList;
