import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokedex() {
    return this.http.get(`${this.baseUrl}pokedex/1`);
  }

  getPokemonById(id: number) {
    return this.http.get(`${this.baseUrl}pokemon/${id}`);
  }

  getPokemonList(): Observable<any> {
    const url = `${this.baseUrl}pokedex/1`;
    return this.http.get<any>(url);
  }

  getPokemonDetails(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/pokemon/${id}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        const pokemon = new Pokemon();
        pokemon.id = response.id;
        pokemon.name = response.name;
        pokemon.height = response.height;
        pokemon.weight = response.weight;
        pokemon.types = response.types.map((type: any) => type.type.name);
        pokemon.imageUrl = response.sprites.front_default;
        return pokemon;
      })
    );
  }
}
