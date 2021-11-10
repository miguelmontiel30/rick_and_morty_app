import React from 'react'

const CharacterCard = ({ character }) => {
    return (
        <>
            <div key={character.id} className="card card-cascade wider col-md-3 m-2">

                <div className="view view-cascade overlay">
                    <img style={{ width: 'auto' }} className="card-img-top" src={character.image} alt="character" />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>


                <div className="card-body card-body-cascade text-center">

                    <h4 className="card-title"><strong>{character.name}</strong></h4>

                    <h5 className="blue-text pb-2"><strong>{character.species}</strong></h5>

                    <p className="card-text">
                        {character.status}
                    </p>

                </div>

            </div>
        </>
    )
}

export default CharacterCard
