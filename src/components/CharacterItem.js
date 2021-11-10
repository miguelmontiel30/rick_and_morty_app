import React, { useState } from 'react'
import CharacterModal from './CharacterModal';
import CharacterStatsBadge from './CharacterStatsBadge'

const showDetails = (character_id) => {
    console.log(character_id);
}

const CharacterItem = ({ character, setMostrarModal }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <div key={character.id} className="list-group-item"> */}
            {/* <div className=''> */}

            <div style={{ maxWidth: '300px' }} key={character.id} className="card card-cascade wider col-lg-4 col-md-4 col-sm-6 mt-3 mb-4">

                <div style={{ maxWidth: '350px', margin: 'auto' }} className="view view-cascade overlay">
                    <img className="card-img-top" src={character.image} alt="character" />
                    <a href="#!" style={{ width: '300px' }}>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>


                <div className="card-body card-body-cascade text-center">

                    <h4 className="card-title"><strong>{character.name}</strong></h4>

                    <h5 className="blue-text pb-2"><strong>{character.species}</strong></h5>

                    <p style={{ fontWeight: 'bold', marginTop: '5px', marginBottom: '0px' }}>
                        Status:
                        <CharacterStatsBadge character_status={character.status} />
                    </p>

                    <button type="button" onClick={() => setMostrarModal(true)} className="btn m-0 mt-3 btn-sm btn-outline-info" data-toggle="modal" data-target="#basicExampleModal">
                        Ver detalles
                    </button>

                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>




            {/* 
                    <div>
                        <img style={{ width: '130px' }} className="rounded" src={character.image} alt="character" />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <p className="h4 card-title blue-text m-0"><strong>{character.name}</strong></p>
                        <p className="card-title m-0">
                            <span className='font-weight-bold'>Specie: </span>
                            <span className="badge mr-2 badge-pill badge-primary">{character.species}</span>
                        </p>
                        <p style={{ fontWeight: 'bold', marginTop: '5px', marginBottom: '0px' }}>
                            Status:
                            <CharacterStatsBadge character_status={character.status} />
                        </p>
                        <button type="button" onClick={() => showDetails(character.id)} className="btn m-0 mt-3 btn-sm btn-outline-info" data-toggle="modal" data-target="#basicExampleModal">
                            Ver detalles
                        </button>
                    </div>
                </div> */}

            {/* </div> */}

        </>
    )
}

export default CharacterItem
