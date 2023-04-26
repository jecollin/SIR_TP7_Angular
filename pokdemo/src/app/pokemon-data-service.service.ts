import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private pokemonId = new BehaviorSubject<number>(0);
  private selectedPokemonSource = new Subject<Pokemon>();
  selectedPokemon$ = this.selectedPokemonSource.asObservable();

  constructor() { }

  getPokemonId() {
    return this.pokemonId.asObservable();
  }

  setPokemonId(id: number) {
    this.pokemonId.next(id);
  }

  changeSelectedPokemon(pokemon: Pokemon) {
    this.selectedPokemonSource.next(pokemon);
  }
}
