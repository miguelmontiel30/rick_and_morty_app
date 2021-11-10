import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import CharacterStatsBadge from './CharacterStatsBadge';

function CharacterModal({ character, handleClose, show }) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{character.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex' }}>
                        <img style={{ maxWidth: '200px', margin: '0 auto' }} className="card-img-top" src={character.image} alt="character" />
                    </div>
                    <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">
                            <span className='font-weight-bold  mr-2'>
                                Name:
                            </span>
                            {character.name}
                        </li>
                        <li className="list-group-item">
                            <span className='font-weight-bold mr-2'>
                                Specie:
                            </span>
                            {character.species}
                        </li>
                        <li className="list-group-item">
                            <span className='font-weight-bold mr-2'>
                                Gender:
                            </span>
                            {character.gender}
                        </li>
                        <li className="list-group-item">
                            <span className='font-weight-bold mr-2'>
                                Status:
                            </span>
                            <CharacterStatsBadge character_status={character.status} />
                        </li>
                        <li className="list-group-item">
                            <span className='font-weight-bold mr-2'>
                                Origin:
                            </span>
                            {character.origin.name}
                        </li>
                        
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" onClick={handleClose} className="btn m-0 mt-3 btn-sm btn-outline-primary" >
                        OK!
                    </button>
                </Modal.Footer>
            </Modal>

        </>

        // <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        //     aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="exampleModalLabel">{character_data.name}</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">
        //                 ...
        //                     </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default CharacterModal;
