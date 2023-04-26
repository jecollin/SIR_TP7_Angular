import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import {PokemonDataService} from "../pokemon-data-service.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  id: string = '';
  pokemons: Pokemon[] = [];
  searchString: string = '';
  selectedPokemonId: number=0;

  constructor(private pokemonService: PokemonService, private pokemonDataService: PokemonDataService) { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemons = response.results;
    });
    /*this.pokemons = [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' },
      { id: 4, name: 'Pikachu' }
    ];
    */

  }
  searchPokemon() {
    if (this.selectedPokemonId) {
      console.log('Le dresseur a choisi le pokémon avec l\'ID ' + this.selectedPokemonId);
    } else if (this.searchString) {
      console.log('Le dresseur a recherché le pokémon avec le nom ' + this.searchString);
    }
  }

  searchPokemonById() {
    this.pokemonDataService.setPokemonId(this.selectedPokemonId);
  }


}
