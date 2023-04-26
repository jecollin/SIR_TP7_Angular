import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
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

  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      catchError(this.handleError<Pokemon>(`getPokemonById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getPokemonList(): Observable<any> {
    const url = `${this.baseUrl}pokedex/1`;
    return this.http.get<any>(url);
  }

  getPokemonDetails(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/pokemon/${id}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        const pokemon: Pokemon = {
          id: response.id,
          name: response.name,
          stats: response.stats.map((stat: any) => {
            return {
              name: stat.stat.name,
              value: stat.base_stat
            };
          })
        };
        return pokemon;
      })
    );
  }
}
