import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private pokemonId = new BehaviorSubject<number>(0);

  getPokemonId() {
    return this.pokemonId.asObservable();
  }

  setPokemonId(id: number) {
    this.pokemonId.next(id);
  }
}
