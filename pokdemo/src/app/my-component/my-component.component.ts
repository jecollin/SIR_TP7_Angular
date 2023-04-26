import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  id: string = '';
  pokemons: Pokemon[] = [];
  searchString: string = '';
  selectedPokemonId: number | null = null;

  constructor(private pokemonService: PokemonService) { }

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


}
