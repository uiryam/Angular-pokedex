import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  private pokeData:PokemonData | any;


  constructor(private http:HttpClient){ }

  getPokemon(pokemonUrl:string):Observable<PokemonData>{
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${pokemonUrl}`)


    return this.pokeData
  }



}
