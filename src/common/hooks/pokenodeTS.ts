import {Pokemon, PokemonClient, EvolutionClient, EvolutionChain,PokemonSpecies} from "pokenode-ts";

const pokeApi = new PokemonClient()
const evoApi = new EvolutionClient()

export const getPokemonByName = async(name:string):Promise<Pokemon> => {
    return await pokeApi.getPokemonByName(name)
}

export const getPokemonByID = async (id:number):Promise<Pokemon> => {
    return await pokeApi.getPokemonById(id)
}
export const getSpeciesByName = async(name:string): Promise<PokemonSpecies> => {
 return await pokeApi.getPokemonSpeciesByName(name)
}
export const getSpeciesByID = async(id:number): Promise<PokemonSpecies> => {
 return await pokeApi.getPokemonSpeciesById(id)
}
export const getEvolutionChangeByName = async(name:string):Promise<EvolutionChain> => {
    const specie = await getSpeciesByName(name)
    const url =  specie.evolution_chain.url
    const res = await fetch(url)

  return res.json()
}

export const getEvolutionChangeByID = async(id:number):Promise<EvolutionChain> => {
    const specie = await getSpeciesByID(id)
    const url =  specie.evolution_chain.url
    const res = await fetch(url)

    return res.json()
}
