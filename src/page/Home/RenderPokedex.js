import React, { useEffect, useState } from "react";
import api from "../../api"
import PokedexBody from "./PokedexBody";
function RenderPokedex() {
    const [pokemons, setPokemons] = useState()
    const pokemonsAll = []

    const testPromisse= new Promise((resolve, reject) => {
        for (var i = 1; i <= 150; i++) {
            api.get('/pokemon/' + i).then((response) => {
                pokemonsAll.push(response.data)
                if(response.data.id===150){


                    resolve(pokemonsAll.sort(function(a,b){
                        if(a.id>b.id){
                            return 1

                        }
                        if(a.id <b.id){
                            return -1
                        }
                        return 0
                    }))
                }


            })
           
        }
    })
  


    useEffect(() => {
        testPromisse.then((response) =>{
           setPokemons(response)
           console.log(response)
       })

    }, [])

    return <>
        <PokedexBody pokemon={pokemons} />

    </>

}
export default RenderPokedex