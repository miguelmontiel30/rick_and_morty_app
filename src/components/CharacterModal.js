import React, { useEffect, useState } from 'react'

function CharacterModal({ character }) {

    const [character_data, setCharacter_data] = useState([])    

    useEffect(() => {

        // console.log(character);
        console.log('Cargo por 1 vez');
        setCharacter_data(character);
        console.log(character_data);
        return (() => {
            setCharacter_data([]);
            console.log('Se desmonto el componente');
        })
    }, [character_data])

    return (
        
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
