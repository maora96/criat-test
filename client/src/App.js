import React from 'react';
import Material from './components/material';
import ModalCreate from "./components/modal-create";
import ModalEdit from "./components/modal-edit";
import './App.css';

function App() {

  const [materials, setMaterials] = React.useState([])
  const [search, setSearch] = React.useState("")
  const [modalEditOpen, setModalEditOpen] = React.useState(false)
  const [modalCreateOpen, setModalCreateOpen] = React.useState(false)

  React.useEffect(() => {
    fetch("https://localhost:3001/materials")
      .then((res) => res.json()
      .then((resJson => {
      console.log(resJson)
      setMaterials(resJson.data)
    })))
  }, [])


  let mat = {
    thumb: "https://imagens.portobello.com.br/unsafe/375x310/https://www.portobello.com.br//data/lines/banner/medio/araucaria_986.jpg",
    name: "material name",
    brand: "portobello",
    description: "A reprodução da Araucária, espécie nativa da Mata Atlântica da região Sul do Brasil."
  }

  return (
    <div className="App">
     {modalEditOpen && <ModalEdit closeModal={setModalEditOpen}/>}
      {modalCreateOpen && <ModalCreate closeModal={setModalCreateOpen}/>}
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
          <form onSubmit={(event) => {
            console.log("hio")
            event.preventDefault();
            //fetch
          }}>
            <input type="text" placeholder="Digite o nome do material..." onChange={(event) => {
              setSearch(event.target.value)
            }}></input>
           
          </form>
        </div>      
        
        <div className="materials-box">
          <Material material ={mat} openModal={setModalEditOpen}/>
          <Material material ={mat} openModal={setModalEditOpen}/>
          <Material material ={mat} openModal={setModalEditOpen}/>
          <Material material ={mat} openModal={setModalEditOpen}/>
          <Material material ={mat} openModal={setModalEditOpen}/>
          <Material material ={mat} openModal={setModalEditOpen}/>
          <Material material ={mat} openModal={setModalEditOpen}/>
          {materials.length !== 0 ? (
            materials.filter((val) => {
              if (search == "") {
                return val
              } else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.brand.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
            }).map((i) => {
              return (
                <Material material = {i}/>
              )
            })
          ): (<div></div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
