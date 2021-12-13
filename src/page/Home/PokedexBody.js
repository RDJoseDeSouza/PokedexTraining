import React from "react"
import './style.css'
function PokedexBody(props){
  const pokemon = props.pokemon || []
  function listPoke(){
    return pokemon.map(function(eachOne){
      return<li key={eachOne.id} className="card"> 
        {eachOne.name}
      </li>
    })

  }
  return <div className="container">
    <h1>Pokedex</h1>
    <ul data-js="pokedex" className="pokedex">
      {listPoke()}
    </ul>
   </div>
  


}
  export default PokedexBody