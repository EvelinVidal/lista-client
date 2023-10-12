import React, {useState, useEffect} from "react";

function Lista() {
// const personas = ["Jorge", "Manuel", "María", "Fernanda"]
const [personas, setPersonas] = useState ([])
useEffect(()=>{ // -> 
  fetch('http://localhost:3010/lista/personas')
  .then(resp => resp.json())
  .then(data =>setPersonas(data))
  .catch(error =>{
    console.log("no se pudo obtener las personas", error)
  })
},[])


  return (
    <>
    <h1>Personas</h1>
    <ul>
      {personas.map((persona, index)=>(
        <li key={index}>{persona.nombre}</li>
      ))}
    </ul>
  </>
);
};

export default Lista
