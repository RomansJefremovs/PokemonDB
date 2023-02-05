import Head from 'next/head'
import { Inter } from '@next/font/google'
import {
    getCardById,
    getCardsForHomePage, getSetById,
    getSetsForHomePage,
    getSetsForSetPage,
    searchCardsByQuery, searchSetsByQuery
} from "@/common/hooks/pokemonTCG";
import {useEffect, useState} from "react";
import {Card} from "pokemon-tcg-sdk-typescript/dist/interfaces/card";
import {Set} from 'pokemon-tcg-sdk-typescript/dist/interfaces/set'
import {Data} from "@/common/types/PokemonTCG.types";
import {EvolutionChain, Pokemon, PokemonSpecies} from "pokenode-ts";
import {
    getEvolutionChangeByID,
    getEvolutionChangeByName,
    getPokemonByID,
    getPokemonByName, getSpeciesByID
} from "@/common/hooks/pokenodeTS";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [card,setCard] = useState<Card>()
    const [pokemon,setPoke] = useState<Pokemon>()
    const [evo,setEvo] = useState<EvolutionChain>()
    const [spec,setSpec] = useState<PokemonSpecies>()
    // const [cards,setCard] = useState<Card[]>()
    // const [sets,setSets] = useState<Set[]>()
    const [sets,setSets] = useState<Set>()
    const getCards = async ()=>{
        // const temp = await getCardById('g1-1')
        // const temp = await searchCardsByQuery('charizard',3)
        // const temp = await getCardsForHomePage()
        // setCard(temp)
        // const temp = await getSetsForHomePage()
        // const temp = await getSetsForSetPage('',1)
        // const temp = await searchSetsByQuery('cos',1)
        // const temp = await getSetById('sm12')
        // setSets(temp)
        // const temp = await getPokemonByName('charizard')
        // const temp = await getPokemonByID(1)
        const temp = await getEvolutionChangeByID(1)
        setSpec(await getSpeciesByID(1))
        setEvo(temp)
        // setPoke(temp)
    }
    // console.log(card)
    // console.log(sets)
    // console.log(pokemon)
    console.log(evo)
    console.log(spec)
   useEffect(()=>{
        getCards()
   },[])
  return (
    <>
      <main >
        <div >
            <p>Hello world</p>
            <>{card != undefined ? card.name : 'Nope'}</>
            <>{pokemon != undefined ? pokemon.name : 'Nope'}</>
            <>{evo != undefined ? evo.chain.evolves_to[0].evolves_to[0].species.name : 'Nope'}</>
            {/*<>{cards != undefined ? cards.map(card=> <p>{card.name}</p>) : 'Nope'}</>*/}
            {/*<>{sets != undefined ? sets.map(set => <p>{set.name}</p>) : 'Nope'}</>*/}
            {/*<>{sets != undefined ? sets.name : 'Nope'}</>*/}
        </div>
      </main>
    </>
  )
}

