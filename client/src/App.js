import React from 'react';
import Material from './components/material';
import Header from './components/header';
import './App.css';

function App() {

  const [materials, setMaterials] = React.useState([])
  const [search, setSearch] = React.useState("")

  React.useEffect(() => {
    fetch("https://localhost:3001/materials")
      .then((res) => res.json()
      .then((resJson => {
      console.log(resJson)
      setMaterials(resJson.data)
    })))
  }, [])


  return (
    <div className="App">
      <Header/>
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
            <button type="submit">Enviar</button>
          </form>
        </div>      
        
        <div className="materials-box">
          {materials.length !== 0 ? (
            materials.map((i) => {
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
