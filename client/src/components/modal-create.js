import React from "react";
import axios from "axios"

function ModalCreate(props) {
    const {closeModal, updateMaterials} = props;
    const [name, setName] = React.useState();
    const [brand, setBrand] = React.useState();
    const [description, setDescription] = React.useState();
    const [isActive, setIsActive] = React.useState(true);
    const [file, setFile] = React.useState();

    return <>
    
    <div className="modal-bg">
        <div className="modal-container">
            <div className="modal-title">
                <h2>Adicionar material</h2>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="modal-body">

              <form onSubmit={(event) => {
                event.preventDefault()
                const data = new FormData();
                data.append("name", name);
                data.append("brand", brand);
                data.append("description", description)
                data.append("isActive", isActive);
                data.append("file", file)
                console.log("hioasda")

                axios.post("http://localhost:3001/materials", data)
                  .then(res => console.log(res))
                  .catch(err => console.log(err.response))

                  axios.get("http://localhost:3001/materials")
                  .then(res => {
                      console.log(res)
                      console.log("materials updated")
                      updateMaterials(res.data)
                  })
                  .catch(err => console.log(err.response))
              
                  closeModal(false)
              }}>
              <label>Nome</label>
           <input type="text" id="name" onChange={event => {
             let value = event.target.value; 
             setName(value)
           }}/>

            <label>Marca</label>
           <select id="brand" onChange={event => {
             let value = event.target.value;
             setBrand(value)
             
           }}>
                <option value="" label="Selecione marca" />
                <option value="PORTOBELLO" label="Portobello" />
                <option value="DECORTILES" label="Decortiles" />
                <option value="PORTINARI" label="Portinari" />
                <option value="DELTA" label="Delta" />
                <option value="CEUSA" label="Ceusa" />
            </select>


            <label>Descrição</label>
           <textarea id="description" onChange={event => {
             let value = event.target.value; 
             setDescription(value)
           }}
           />

           <div className="checkbox-input">
               <label>Está ativo?</label>
                <input type="checkbox" id="isActive" onClick={event => {
                  setIsActive(!isActive)
                  console.log(isActive)
                }}
               ></input>

           </div>

           <label>Thumb</label>
           <input type="file" id="thumb" onChange={event => {
             let file = event.target.files[0]
             setFile(file)
           }}></input>

           <div className="modal-footer">
                <button onClick={() => closeModal(false)}>Cancelar</button>
                <button type="submit">Submit</button>
            </div>
              </form>
               
            </div>
            
        </div>

    </div>
    
    </>
}

export default ModalCreate;