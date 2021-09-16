import './App.css';
import React from 'react';
import Material from './components/material';
import ModalCreate from "./components/modal-create";
import ModalEdit from "./components/modal-edit";
import ModalDelete from './components/modal-delete';
import axios from "axios"



function App() {

  const [materials, setMaterials] = React.useState([])
  const [search, setSearch] = React.useState("")
  const [currentId, setCurrentId] = React.useState()
  const [modalEditOpen, setModalEditOpen] = React.useState(false)
  const [modalCreateOpen, setModalCreateOpen] = React.useState(false)
  const [modalDeleteOpen, setModalDeleteOpen] = React.useState(false)

  React.useEffect(() => {

    axios.get("http://localhost:3001/materials")
      .then(res => {
        setMaterials(res.data)
      })
      .catch(err => console.log(err.response))
  }, [])


  return (
    <div className="App">
      {modalEditOpen && <ModalEdit closeModal={setModalEditOpen} id={currentId}  updateMaterials={setMaterials}/>}
      {modalCreateOpen && <ModalCreate closeModal={setModalCreateOpen}  updateMaterials={setMaterials}/>}
      {modalDeleteOpen && <ModalDelete closeModal={setModalDeleteOpen} id={currentId} updateMaterials={setMaterials}/>}
        <header>
            <nav>
               <span className="title">Materiais</span>

                <span onClick={() => {
                    setModalCreateOpen(true)
                }}>Adicionar material</span>
            </nav>
        </header>
      <div className="container">
        <div className="search-box">
          <form>
            <input type="text" placeholder="Digite o nome do material..." onChange={(event) => {
              setSearch(event.target.value)
            }}></input>
           
          </form>
        </div>      
        
        <div className="materials-box">
          {materials.length !== 0 ? (
            materials.filter((val) => {
              if (search === "") {
                return val
              } else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.brand.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
            }).map((i) => {
              return (
                <Material material = {i} openModal={setModalEditOpen} setId={setCurrentId} openDeleteModal={setModalDeleteOpen}/>
              )
            })
          ): (<div>Nenhum material encontrado...</div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
