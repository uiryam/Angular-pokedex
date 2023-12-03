import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonsData } from '../models/pokemonsData';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2';  // Substitua pela sua URL real
  urls: string[] = []

  pokemons:PokemonsData = {
    results:[{
      url:''
    }]
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPokemonsItens(0, 10)

  }

  getPokemons(offset: number, limit: number): Observable<PokemonsData> {
    const url = `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get<PokemonsData>(url);
  }

  loadPokemonsItens(offset: number, limit: number) {
    this.getPokemons(offset, limit).subscribe(
      {
        next: (list) =>  {
            this.pokemons = {
              results: list.results
            }
            this.urls = list.results.map(pokemon => pokemon.url)
          }
       }
    )
  }
}

