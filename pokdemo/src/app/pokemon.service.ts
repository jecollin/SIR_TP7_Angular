import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
