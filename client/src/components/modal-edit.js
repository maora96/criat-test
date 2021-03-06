import React from "react";
import axios from "axios"

function ModalEdit(props) {
    const {closeModal, id, updateMaterials} = props;
    const [name, setName] = React.useState();
    const [brand, setBrand] = React.useState();
    const [description, setDescription] = React.useState();
    const [isActive, setIsActive] = React.useState(true);
    const [file, setFile] = React.useState();

    React.useEffect(() => {
      axios.get(`http://localhost:3001/materials/${id}`)
      .then(res => {
        console.log(res)
        setName(res.data.name)
        setBrand(res.data.brand)
        setDescription(res.data.description)
        setIsActive(res.data.isActive)
        setFile(res.data.thumb)
      })
      .catch(err => console.log(err.response))
    }, [id])

    return <>
    
    <div className="modal-bg">
        <div className="modal-container">
            <div className="modal-title">
                <h2>Edit modal</h2>
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

                let jsonObject = {
                  name, 
                  brand, 
                  description,
                  isActive
                };

                axios.put(`http://localhost:3001/materials/thumb/${id}`, data).then(res => console.log(res))
                .catch(err => console.log(err.response))
                
                axios.put(`http://localhost:3001/materials/${id}`, jsonObject)
                  .then(res => console.log(res))
                  .catch(err => console.log(err.response))

                  axios.get("http://localhost:3001/materials")
                        .then(res => {
                            console.log(res)
                            updateMaterials(res.data)
                        })
                        .catch(err => console.log(err.response))
                    
                        closeModal(false)
              }}>
              <label>Nome</label>
           <input type="text" id="name" value={name} onChange={event => {
             let value = event.target.value; 
             setName(value)
           }}/>

            <label>Marca</label>
           <select id="brand" value={brand} onChange={event => {
             let value = event.target.value;
             setBrand(value)
             
           }}>
                <option value="" label="Selecione a marca" />
                <option value="PORTOBELLO" label="Portobello" />
                <option value="DECORTILES" label="Decortiles" />
                <option value="PORTINARI" label="Portinari" />
                <option value="DELTA" label="Delta" />
                <option value="CEUSA" label="Ceusa" />
            </select>


            <label>Descri????o</label>
           <textarea id="description" value={description} onChange={event => {
             let value = event.target.value; 
             setDescription(value)
           }}
           />

           <div className="checkbox-input">
               <label>Est?? ativo?</label>
                <input type="checkbox" id="isActive" checked={isActive} onClick={event => {
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

export default ModalEdit;