import React from "react"
import './style.css'
function PokedexBody(props){
  const pokemon = props.pokemon || []
  function renderImg(id){
    if(id<10){
      return <img className="card-image " src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`}/>
    }else if(id<100){
      return <img className="card-image " src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`}/>

    }else{
      return <img className="card-image " src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}/>
    }

  }

  function listPoke(){
    return pokemon.map(function(eachOne){
      return<li key={eachOne.id} className={"card "+ eachOne.types[0].type.name}> 
          {renderImg(eachOne.id)}
          <h2 className="card-title">{eachOne.id}. {eachOne.name}</h2>
          <p className="card-subtitle">{eachOne.types.map(typeEach=> typeEach.type.name).join(" | ")}</p>
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