import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  id: string = '';
  pokemons: Pokemon[] = [];
  search: string = '';
  selectedPokemonId: number | null = null;

  constructor() { }

  ngOnInit() {
    this.pokemons = [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' },
      { id: 4, name: 'Pikachu' }
    ];
  }

}
