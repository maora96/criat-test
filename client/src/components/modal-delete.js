import React from "react";

function ModalDelete(props) {
    const {closeModal} = props;
    return <>
    
    <div className="modal-bg">
        <div className="modal-container">
            <div className="modal-title">
                <h2>Delete</h2>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="modal-body">
                Tem certeza que quer deletar esse material?
            </div>

            
           <div className="modal-footer">
                <button onClick={() => closeModal(false)}>Cancelar</button>
                <button>Deletar</button>
            </div>
            
        </div>

    </div>
    
    </>
}

export default ModalDelete;