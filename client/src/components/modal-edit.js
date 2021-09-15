import React from "react";

function ModalEdit(props) {
    const {closeModal} = props;
    return <>
    
    <div className="modal-bg">
        <div className="modal-container">
            <div className="modal-title">
                <h2>Edit modal</h2>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="modal-body">
                <form>
                    
        
                </form>
            </div>
            <div className="modal-footer">
                <button onClick={() => closeModal(false)}>Cancelar</button>
                <button>Submit</button>
            </div>
        </div>

    </div>
    
    </>
}

export default ModalEdit;