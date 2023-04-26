import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import {PokemonDataService} from "../pokemon-data-service.service";


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | undefined;
  pokemonId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
    private pokemonDataService: PokemonDataService
  ) {}
  ngOnInit() {
    this.pokemonDataService.selectedPokemon$.subscribe(pokemon => {
      if (pokemon) {
        this.pokemonService.getPokemonById(pokemon.id).subscribe(pokemon => {
          this.pokemon = pokemon;
        });
      }
    });

    this.pokemonDataService.getPokemonId().subscribe(pokemonId => {
      if (pokemonId !== 0) {
        this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => {
          this.pokemon = pokemon;
        });
      }
    });
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.pokemonService.getPokemonById(id)
        .subscribe((pokemon: Pokemon) => {
          if (pokemon) {
            this.pokemon = pokemon;
          }
        });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
