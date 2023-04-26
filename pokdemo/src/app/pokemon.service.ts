import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
