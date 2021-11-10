import React from 'react'
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
    return (
        <div style={{ margin: 10, padding: 10, border: '1px solid red' }}>
            
            <h2 className="h2 text-center">Characters List</h2>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',  border: '1px solid black' }}>
                {
                    characters.map((character, index) => {
                        return (
                            <>
                                <CharacterCard key={index} character={character}  />
                            </>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default CharacterList;
