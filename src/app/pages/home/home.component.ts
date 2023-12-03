import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonsData } from 'src/app/models/pokemonsData';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon:PokemonData
  pokemons:PokemonsData
  urls: string[] = []
  pokemonList: any[] = []
  offset = 0;
  limit = 10;

  constructor(
    private service:PokemonService,
    private pokemonApiService: PokemonApiService
  ) {

    this.pokemon = {
      id:0,
      name:'',
      sprites: {
        other: {
          dream_world: {
            front_default:''
          }
        }
      },
      types:[],
      stats:[],
  },

    this.pokemons = {
      results:[{
        url:''
      }]
    }

  }


  ngOnInit(): void {

    this.loadPokemonsItens(this.offset, this.limit)

  }


  loadPokemonsItens(offset: number, limit: number) {
    this.pokemonApiService.getPokemons(offset, limit).subscribe({
      next: (list) => {
        this.pokemons = {
          results: list.results
        }
        this.urls = list.results.map(pokemon => pokemon.url)
        this.urls.forEach(url => {
          this.getPokemonDetails(url)
        })
      }
    })
  }

  getPokemonDetails(url: string) {
    this.service.getPokemon(url).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
          stats: res.stats
        }
        this.pokemonList.push(this.pokemon)
        this.sortPokemonList()
      },
      error: (err) => console.log('not found')
    });
  }

  loadMorePokemons() {
    this.offset += this.limit; // Aumenta o offset para carregar Pokémon adicionais
    this.loadPokemonsItens(this.offset, this.limit);
  }

  sortPokemonList() {
    this.pokemonList.sort((a, b) => a.id - b.id);
  }

}
