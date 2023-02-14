import {PokemonTCG} from "pokemon-tcg-sdk-typescript";
import {Card} from "pokemon-tcg-sdk-typescript/dist/interfaces/card";
import {Set} from 'pokemon-tcg-sdk-typescript/dist/interfaces/set'

//CARDS API

//Get cards for main page
export const getCardsForHomePage = async():Promise<Card[]>=>{
    const pageNumber = Math.random() * 71
    let params = {pageSize:6, page: pageNumber}
    return await PokemonTCG.findCardsByQueries(params)
}
//Get cards for cards page
export const getCardsForCardsPage = async (name:string, pageNumber?:number):Promise<Card[]> => {
    let params = {q:`name:${name}*`,pageSize:12, page: pageNumber != undefined ? pageNumber : 1}
    return await PokemonTCG.findCardsByQueries(params)
}
//Search cards
export const searchCardsByQuery = async (name:string, pageNumber?:number):Promise<Card[]> => {
    let params = {q:`name:${name}*`,pageSize:12, page: pageNumber != undefined ? pageNumber : 1}
    return await PokemonTCG.findCardsByQueries(params)
}
//Find card by id
export const getCardById = async (id:string):Promise<Card> => {
    return await PokemonTCG.findCardByID(id);
}

//SETS API

//Get sets for main page
export const getSetsForHomePage = async ():Promise<Set[]> => {
    const pageNumber = Math.random() * 36
    let params = {pageSize: 6, page: pageNumber}
   return await PokemonTCG.findSetsByQueries(params)
}
//Get cards for cards page
export const getSetsForSetPage = async (name:string, pageNumber?:number):Promise<Set[]> => {
    let params = {q:`name:${name}*`,pageSize:12, page: pageNumber != undefined ? pageNumber : 1}
    return await PokemonTCG.findSetsByQueries(params)
}
//Search sets
export const searchSetsByQuery = async (name:string, pageNumber?:number):Promise<Set[]> => {
    let params = {q:`name:${name}*`,pageSize:12, page: pageNumber != undefined ? pageNumber : 1}
    return await PokemonTCG.findSetsByQueries(params)
}
//Find set by id
export const getSetById = async (id:string):Promise<Set> => {
    return await PokemonTCG.findSetByID(id);
}