import axios from "axios";
import React from "react";

function ModalDelete(props) {
    const {closeModal, id, updateMaterials} = props;
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
                <button onClick={(event) => {
                    axios.delete(`http://localhost:3001/materials/${id}`)
                    .then(res => console.log(res))
                    .catch(err => console.log(err.response))

                    axios.get("http://localhost:3001/materials")
                        .then(res => {
                            console.log(res)
                            updateMaterials(res.data)
                        })
                        .catch(err => console.log(err.response))
                    
                        closeModal(false)
                }}>Deletar</button>
            </div>
            
        </div>

    </div>
    
    </>
}

export default ModalDelete;